import React from "react";
import styles from "../../app/page.module.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModeButton = ({
  theme,
  onclick,
}: {
  theme: Theme;
  onclick?: () => void;
}) => {
  return (
    <button className={styles.mbtn} onClick={onclick}>
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ModeButton;
