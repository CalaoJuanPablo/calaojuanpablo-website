import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import logoImage from 'public/calaojuanpablo-logo-full-light-bg.svg'
import styles from './nav-bar.module.scss'

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
              <Link
                href='/'
                className={pathname === '/' ? styles['active-nav-link'] : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className={
                  pathname === '/about' ? styles['active-nav-link'] : ''
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/work'
                className={
                  pathname === '/work' ? styles['active-nav-link'] : ''
                }
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href='/blog'
                className={
                  pathname === '/blog' ? styles['active-nav-link'] : ''
                }
              >
                Blog (es)
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
