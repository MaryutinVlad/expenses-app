import Link from "next/link"
import { ReactElement } from "react"
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import type { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {
  return (
    <main className={styles.container}>
      <div>
        <h2>
          Expenditure items:
        </h2>
        <button>
          Add item+
        </button>
      </div>
      <Link href={'/about'}>to about</Link>
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
