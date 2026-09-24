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
    title: "Leave Management",
    Svg: require("@site/static/img/undraw_responsive.svg").default,
    description: (
      <>
        Manage every leave request and type from a single command center with
        full transparency and control.
      </>
    ),
  },
  {
    title: "Employee Management",
    Svg: require("@site/static/img/undraw_online_connection.svg").default,
    description: (
      <>
        Add, invite, and organize your team in a few clicks. Keep all employee
        information in one secure place.
      </>
    ),
  },
  {
    title: "AI Assistant",
    Svg: require("@site/static/img/undraw_code_review.svg").default,
    description: (
      <>
        Handle leave requests, meeting room bookings, and support tickets
        through a single intelligent chat.
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