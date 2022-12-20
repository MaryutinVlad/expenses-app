import Image from 'next/image'

import styles from '../styles/Header.module.css'
import testAvatar from '../../progress-tracker/src/images/testImage.png'

function Header() {

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        Expenses app
      </h1>
      <div className={styles.user}>
        <Image
          className={styles.image}
          src={testAvatar}
          alt="Paika"
        />
        <span>
          ppp
        </span>
      </div>
    </header>
  )
}

export default Header