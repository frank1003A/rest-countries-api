"use client"

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import styles from "../../app/page.module.css";
import ModeButton from "../Button/ModeButton";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.navbar}>
      <Link href={"/"}>
      <span>Where in the world?</span>
      </Link>
      <ModeButton theme={theme} onclick={toggleTheme} />
    </div>
  );
};

export default Navbar;
