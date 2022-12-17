import { ReactNode } from "react"
import Header from "./Header"
import styles from '../styles/Layout.module.css'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.page}>
      <Header />
      {children}
    </div>
  )
}