import styles from '../styles/ExpenditureItem.module.css'

export interface ItemProps {
  id: string,
  title: string,
}

export default function ExpenditureItem({ id, title} : ItemProps) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        {title}
      </span>
      <button className={styles.button}>
        Add+
      </button>
      <div className={styles.values}>
        <span className={styles.text}>
          Today: {}
        </span>
        <span className={styles.text}>
          Total: {}
        </span>
      </div>
    </div>
  )
}