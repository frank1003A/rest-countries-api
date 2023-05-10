"use client"

import React from "react";
import styles from "../../app/page.module.css";
import ModeButton from "../Button/ModeButton";
import { useState } from "react";

interface THEME {
  theme: "light" | "dark";
}

const Navbar = () => {
  const [dataTheme, setDataTheme] = useState<THEME["theme"]>("light");
  return (
    <div className={styles["navbar"]} data-theme={dataTheme}>
      <span>Where in the world?</span>
      <ModeButton theme={dataTheme} onclick={() => setDataTheme("dark")} />
    </div>
  );
};

export default Navbar;
