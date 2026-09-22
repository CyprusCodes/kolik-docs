import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fast execution",
    Svg: require("@site/static/img/undraw_responsive.svg").default,
    description: (
      <>
        CMND.ai integrates with your internal databases, workflows, any APIs and
        software. We are the BusinessGPT
      </>
    ),
  },
  {
    title: "Data Harmony",
    Svg: require("@site/static/img/undraw_online_connection.svg").default,
    description: (
      <>
        We are putting you in command of your data. We bring all of your data
        together, from different <code>sources</code> and <code>formats.</code>
      </>
    ),
  },
  {
    title: "Security",
    Svg: require("@site/static/img/undraw_code_review.svg").default,
    description: (
      <>
        CMND.ai uses Role Based Access controls to make sure only authorised
        staff can see relevant data and utilise platform connections.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
