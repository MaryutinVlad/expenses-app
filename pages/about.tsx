import Link from "next/link"
import { ReactElement } from "react"
import Layout from '../components/Layout'

import type { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {
  return (
    <>
      About
      <Link href={'/'}>to Home</Link>
    </>
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