import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === "en";
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{isEnglish ? "Manage all your HR processes from one central dashboard." : siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            to="./docs/quickstart"
            className="button button--secondary button--lg"
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
