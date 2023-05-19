import React from 'react'
import styles from '../app/page.module.css'
const Loading = () => {
  return (
    <div className={styles.center}>
        <span className={styles.loader}></span>
    </div>
  )
}

export default Loading