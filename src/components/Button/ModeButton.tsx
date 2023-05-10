import React from 'react'
import styles from "../../app/page.module.css"

const ModeButton = ({theme, onclick}: {theme: "dark" | "light"; onclick?: () => void }) => {
  return (
    <button className={styles.button} onClick={onclick}>
     {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  )
}

export default ModeButton