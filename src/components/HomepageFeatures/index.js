import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tutorials Made Easy',
    Svg: require('@site/static/img/undraw_writing-online_x665.svg').default,
    description: (
      <>
        This <a href={"hello-react"}>tutorial</a> will guide you through setting up your Docusaurus site.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description, to }) {
  const inner = (
    <>
      <div className="text--center">
        {typeof Svg === 'string' || Svg == null ? null : (
          <Svg className={styles.featureSvg} role="img" />
        )}
        {typeof Svg === 'string' && <img src={Svg} className={styles.featureSvg} alt="" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </>
  );

  return (
    <div className={clsx('col col--4')}>
      {to ? (
        <Link to={to} className={styles.featureLink}>
          {inner}
        </Link>
      ) : (
        <div className={styles.featureLink}>{inner}</div>
      )}
    </div>
  );
}

export default function HomepageFeatures() {
  const [features, setFeatures] = useState(FeatureList);

  useEffect(() => {
    const endpoint = 'http://localhost:8080/api/public/documents';
    const origin = new URL(endpoint).origin;

    let mounted = true;
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        if (!Array.isArray(data)) return;

        const mapped = data.map((d) => ({
          Svg: d.icon ? `${origin}/${d.icon}` : undefined,
          title: d.title || d.slug || 'Untitled',
          description: d.summary || null,
          to: d.slug ? `/${d.slug}/intro` : null,
        }));

        setFeatures(mapped);
      })
      .catch(() => {
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
