import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../../public/calaojuanpablo-logo-full-light-bg.svg'

export const NavBar = () => (
  <nav>
    <Image src={logoImage} alt='CalaoJuanPablo logo' />
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Blog (es)</a>
        </Link>
      </li>
    </ul>
  </nav>
)
