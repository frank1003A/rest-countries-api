import React from "react";
import styles from "@/app/page.module.css";

interface FlexProps extends React.ComponentPropsWithoutRef<"div"> {}

const Flex = ({ children, ...rest }: FlexProps) => {
  return <div className={styles.flex} {...rest}>{children}</div>;
};

export default Flex;
