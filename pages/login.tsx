import { useRouter } from 'next/router'
import Link from 'next/link'
import { useRef } from 'react'

import styles from '../styles/Auth.module.css'
import { useUser } from '../contexts/User'

export default function Login() {

  const user = useUser()
  const router = useRouter()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  if (user) {
    router.push('/')
  }

  async function loginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!emailRef.current || !passwordRef.current) {
      return
    }

    const res = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
    })

    const token = await res.json()

    if (token) {
      localStorage.setItem('expenses-app', JSON.stringify(token))
      router.push('/')
    }
  }

  return (
    <div className={styles.overlay}>
      <form
        className={styles.form}
        onSubmit={loginUser}
      >
        <h2 className={styles.title}>
          Login
        </h2>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={emailRef} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordRef} />

        <Link
          className={styles.link}
          href='/sign-up'
        >
          Click here to create an account
        </Link>

        <input
          className={styles.button}
          type="submit"
        />
      </form>
    </div>
  )
}