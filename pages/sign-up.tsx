import Link from 'next/link'
import { useRef } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Auth.module.css'

export default function SignUp() {

  const authRouter = useRouter()
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  async function createAccount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      return 
    }

    const res = await fetch('http://localhost:5000/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
    })

    const user = await res.json()
    if (user) {
      authRouter.push('/login')
    }
  }

  return (
    <div className={styles.overlay}>
      <form
        className={styles.form}
        onSubmit={createAccount}
      >
        <h2 className={styles.title}>
          Sign up
        </h2>

        <label htmlFor="username">Name</label>
        <input type="text" name="username" ref={nameRef} required/>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={emailRef} required/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordRef} required/>

        <Link
          className={styles.link}
          href='/login'
        >
          Click here to login
        </Link>

        <input
          className={styles.button}
          type="submit"
        />
      </form>
    </div>
  )
}