import Header from '../components/Header'
import ExpenditureItem from '../components/ExpenditureItem'
import styles from '../styles/Home.module.css'

import type { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {

  return (
    <>
      <Header />
      <main className={styles.container}>
        <ExpenditureItem
          id="expenditureItem"
          title="Expenditure items"
        />
      </main>
    </>
  )
}

export default Page
