import styles from "./loading.module.css"

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>V</div>
        </div>
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  )
}

