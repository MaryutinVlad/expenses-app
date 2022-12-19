import { ReactElement, useState, useContext } from "react"
import { useRouter } from "next/router"
import Layout from '../components/Layout'
import AuthContext from "../contexts/Auth"
import ExpenditureItem from '../components/ExpenditureItem'
import styles from '../styles/Home.module.css'

import type { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {

  const router = useRouter()
  const authContext = useContext(AuthContext)

  if (!authContext) {
    router.push('/login')
  }

  return (
    <main className={styles.container}>
      <ExpenditureItem
        id="expenditureItem"
        title="Expenditure items"
      />
    </main>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page
