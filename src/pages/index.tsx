import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === "en";
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          <img
            className={styles.heroLogo}
            src={useBaseUrl("/img/kolik-favicon.svg")}
            alt={siteConfig.title}
          />
        </Heading>
        <p className={styles.heroSubtitle}>{isEnglish ? "Manage all your HR processes from one central dashboard." : siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            to="./docs/quickstart"
            className="button button--primary button--lg"
          >
            {isEnglish ? "Read Kolik documentation" : "Kolik dokümantasyonunu oku"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig, i18n } = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === "en";
  return (
    <Layout
      title={`${siteConfig.title} ${isEnglish ? "Docs" : "Dokümantasyon"}`}
      description={isEnglish ? "Kolik — manage leave, employees, payments, and support tickets all in one place." : "Kolik — izinleri, çalışanları, ödemeleri ve destek taleplerini tek yerden yönetin."}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
