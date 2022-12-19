import Link from 'next/link'
import { useRef, useContext } from 'react'
import { useRouter } from 'next/router'

import AuthContext from '../contexts/Auth'
import styles from '../styles/Auth.module.css'

export default function Login() {

  const authRouter = useRouter()
  const authContext = useContext(AuthContext)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

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
      authContext.loggedIn = true
      console.log(authContext)
      authRouter.push('/')
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