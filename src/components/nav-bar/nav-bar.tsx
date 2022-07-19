import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import logoImage from 'public/calaojuanpablo-logo-full-light-bg.svg'
import styles from 'styles/nav-bar.module.scss'

export const NavBar = () => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <div className='container'>
        <figure className={styles.logo}>
          <Image src={logoImage} alt='CalaoJuanPablo logo' />
        </figure>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href='/'>
                <a
                  className={pathname === '/' ? styles['active-nav-link'] : ''}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a
                  className={
                    pathname === '/about' ? styles['active-nav-link'] : ''
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/work'>
                <a
                  className={
                    pathname === '/work' ? styles['active-nav-link'] : ''
                  }
                >
                  Work
                </a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <a
                  className={
                    pathname === '/blog' ? styles['active-nav-link'] : ''
                  }
                >
                  Blog (es)
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
