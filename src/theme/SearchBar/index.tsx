import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import OriginalSearchBar from "@theme-original/SearchBar";
import styles from "./styles.module.css";

const quickLinks = [
  { label: ["İzinler", "Leave"], description: ["Türler, politikalar ve talepler", "Types, policies, and requests"], to: "admin-panel/izinler/", icon: "◷" },
  { label: ["Çalışanlar", "Employees"], description: ["Profil ve çalışan işlemleri", "Profiles and employee actions"], to: "ana-panel/calisanlar", icon: "♧" },
  { label: ["Yönetici Paneli", "Admin Panel"], description: ["Şirket ve organizasyon ayarları", "Company and organization settings"], to: "admin-panel/", icon: "⚙" },
  { label: ["Uygulamalar", "Apps"], description: ["Kolik modüllerini keşfet", "Explore Kolik modules"], to: "uygulamalar/", icon: "▦" },
  { label: ["Destek Talepleri", "Support Tickets"], description: ["Destek kaydı oluştur ve takip et", "Create and track support tickets"], to: "ana-panel/destek-talepleri", icon: "☏" },
  { label: ["Bordro", "Payroll"], description: ["Bordro ekranı ve işlemleri", "Payroll screens and actions"], to: "ana-panel/bordro", icon: "▤" },
  { label: ["Takvim", "Calendar"], description: ["Etkinlik ve takvim görünümü", "Events and calendar view"], to: "ana-panel/takvim", icon: "▣" },
  { label: ["Hesabım", "My Account"], description: ["Kişisel ayarlar ve bildirimler", "Personal settings and notifications"], to: "ana-panel/hesabim/", icon: "◉" },
] as const;

export default function SearchBar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { i18n, siteConfig } = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === "en";
  const languageIndex = isEnglish ? 1 : 0;
  const docsBase = `${siteConfig.baseUrl}${i18n.currentLocale === i18n.defaultLocale ? "" : `${i18n.currentLocale}/`}docs/`;
  const previousLocation = useRef(location.pathname + location.search + location.hash);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    });
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const nextLocation = location.pathname + location.search + location.hash;
    if (previousLocation.current !== nextLocation) {
      previousLocation.current = nextLocation;
      setOpen(false);
      setQuery("");
    }
  }, [location.pathname, location.search, location.hash]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <button
        className={styles.trigger}
        type="button"
        aria-label={isEnglish ? "Search documen" : "Dokümanlarda ara"}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <circle cx="10.7" cy="10.7" r="6.7" stroke="currentColor" strokeWidth="1.8" />
          <path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span>{isEnglish ? "Search Documan..." : "Dokümanlarda ara..."}</span>
        <kbd>⌘ K</kbd>
      </button>

      {mounted && open && createPortal(
        <div className={styles.overlay} onMouseDown={(event) => {
          if (event.target === event.currentTarget) close();
        }}>
          <div
            ref={dialogRef}
            className={styles.dialog}
            data-search-active={query.trim() ? "true" : "false"}
            role="dialog"
            aria-modal="true"
            aria-label={isEnglish ? "Search documen and quick links" : "Dokümanlarda ara ve hızlı git"}
          >
            <div className={styles.searchRow} onChangeCapture={(event) => {
              const target = event.target;
              if (target instanceof HTMLInputElement) setQuery(target.value);
            }}>
              <OriginalSearchBar />
              <button className={styles.closeButton} type="button" onClick={close} aria-label={isEnglish ? "Close search" : "Aramayı kapat"}>
                Esc
              </button>
            </div>

            {!query.trim() && (
              <div className={styles.quickLinks}>
                <div className={styles.sectionTitle}>{isEnglish ? "Quick links" : "Hızlı git"}</div>
                <div className={styles.linkGrid}>
                  {quickLinks.map((item) => (
                    <Link key={item.to} to={`${docsBase}${item.to}`} className={styles.quickLink} onClick={close}>
                      <span className={styles.linkIcon} aria-hidden="true">{item.icon}</span>
                      <span className={styles.linkText}>
                        <strong>{item.label[languageIndex]}</strong>
                        <small>{item.description[languageIndex]}</small>
                      </span>
                      <span className={styles.arrow} aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.footer}>
              <span><kbd>↑</kbd> <kbd>↓</kbd> {isEnglish ? "navigate" : "gezin"}</span>
              <span><kbd>↵</kbd> {isEnglish ? "open" : "aç"}</span>
              <span><kbd>Esc</kbd> {isEnglish ? "close" : "kapat"}</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
