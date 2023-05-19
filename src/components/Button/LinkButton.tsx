import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "../../app/page.module.css";

interface LinkButtonProps extends React.ComponentPropsWithoutRef<'button'>{
    to: string;
}

const LinkButton = ({ children, to, ...rest }:LinkButtonProps) => {
  return (
    <Link href={to}>
      <button className={styles["primary-btn"]} {...rest}> 
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
