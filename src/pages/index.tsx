import type {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Cards from "../components/Cards";

function HomepageHeader(): ReactElement {
  return (
    <header className={clsx('hero hero--primary hero-banner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          RAMEN SCHEMA
        </Heading>

        <p className="hero__subtitle">Reusable Abstraction Model for Editorial Needs</p>

        <div className="button-row">
          <Link
            className="button button--secondary button--lg"
            to="/concepts">
            What is RAMEN?
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/specification">
            Specification
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/tools">
            RAMEN Tools
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />

      <main>
        <Cards />
      </main>
    </Layout>
  );
}
