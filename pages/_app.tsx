import { ReactElement, ReactNode, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import { UserContext } from '../contexts/User'

export type NextPageWithLayout<P = {}, IP= P> = NextPage<PageTransitionEvent, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchData(token:string) {
      const res = await fetch(`http://localhost:5000/auth/${token}`)
      const user = await res.json()
      setUser(user)
    }
    const data = localStorage.getItem('expenses-app')

    if (!data) {
      router.push('/login')
    } else {
      const parsedData = JSON.parse(data)
      const token = parsedData.token
      fetchData(token)
    }
  }, [])

  return getLayout(
  <UserContext.Provider value={user}>
    <Component {...pageProps} />
  </UserContext.Provider>  
  )
}
