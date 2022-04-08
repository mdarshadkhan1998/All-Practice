import React from 'react'
import styles from "./PropsButtonMethod.module.css";

function PropsButtonMethod() {
  return (
    <div id={styles.mainDiv}>
      <button className={styles.JoinUs}>JOIN US</button>
      <button className={styles.Setting}>SETTING</button>
      <button className={styles.Login}>LOGIN</button>
      <button className={styles.ContactUs}>CONTACT US</button>
      <button className={styles.Search}>SEARCH</button>
      <button className={styles.Help}>HELP</button>
      <button className={styles.Home}>HOME</button>
      <button className={styles.Download}>DOWNLOAD</button>
    </div>
  )
}

export default PropsButtonMethod