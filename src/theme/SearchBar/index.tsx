import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import OriginalSearchBar from "@theme-original/SearchBar";
import styles from "./styles.module.css";

const quickLinks = [
  { label: "İzinler", description: "Türler, politikalar ve talepler", to: "/docs/admin-panel/izinler/", icon: "◷" },
  { label: "Çalışanlar", description: "Profil ve çalışan işlemleri", to: "/docs/ana-panel/calisanlar", icon: "♧" },
  { label: "Yönetici Paneli", description: "Şirket ve organizasyon ayarları", to: "/docs/admin-panel/", icon: "⚙" },
  { label: "Uygulamalar", description: "Kolik modüllerini keşfet", to: "/docs/uygulamalar/", icon: "▦" },
  { label: "Destek Talepleri", description: "Destek kaydı oluştur ve takip et", to: "/docs/ana-panel/destek-talepleri", icon: "☏" },
  { label: "Bordro", description: "Bordro ekranı ve işlemleri", to: "/docs/ana-panel/bordro", icon: "▤" },
  { label: "Takvim", description: "Etkinlik ve takvim görünümü", to: "/docs/ana-panel/takvim", icon: "▣" },
  { label: "Hesabım", description: "Kişisel ayarlar ve bildirimler", to: "/docs/ana-panel/hesabim/", icon: "◉" },
] as const;

export default function SearchBar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
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
        aria-label="Dokümanlarda ara"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <circle cx="10.7" cy="10.7" r="6.7" stroke="currentColor" strokeWidth="1.8" />
          <path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span>Dokümanlarda ara...</span>
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
            aria-label="Dokümanlarda ara ve hızlı git"
          >
            <div className={styles.searchRow} onChangeCapture={(event) => {
              const target = event.target;
              if (target instanceof HTMLInputElement) setQuery(target.value);
            }}>
              <OriginalSearchBar />
              <button className={styles.closeButton} type="button" onClick={close} aria-label="Aramayı kapat">
                Esc
              </button>
            </div>

            {!query.trim() && (
              <div className={styles.quickLinks}>
                <div className={styles.sectionTitle}>Hızlı git</div>
                <div className={styles.linkGrid}>
                  {quickLinks.map((item) => (
                    <Link key={item.to} to={item.to} className={styles.quickLink} onClick={close}>
                      <span className={styles.linkIcon} aria-hidden="true">{item.icon}</span>
                      <span className={styles.linkText}>
                        <strong>{item.label}</strong>
                        <small>{item.description}</small>
                      </span>
                      <span className={styles.arrow} aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.footer}>
              <span><kbd>↑</kbd> <kbd>↓</kbd> gezin</span>
              <span><kbd>↵</kbd> aç</span>
              <span><kbd>Esc</kbd> kapat</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
