import { ReactNode } from "react"

import Header from "./Header"
import styles from '../styles/Layout.module.css'
import { useUser } from "../contexts/User"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const user = useUser()
  console.log(user)
  return (
    <div className={styles.page}>
      <Header />
      {children}
    </div>
  )
}