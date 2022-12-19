import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import AuthContext from '../contexts/Auth'

export type NextPageWithLayout<P = {}, IP= P> = NextPage<PageTransitionEvent, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <AuthContext.Provider value={{ loggedIn: false}}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}
