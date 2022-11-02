import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../../../public/calaojuanpablo-logo-full-light-bg.svg'
import styles from './cjp-logo.module.scss'

export const CjpLogo = () => (
  <figure className={styles['logo-figure']}>
    <Link href='/'>
      <Image src={logoImage} alt='CalaoJuanPablo logo' />
    </Link>
  </figure>
)
