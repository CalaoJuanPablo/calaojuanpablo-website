import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../../public/calaojuanpablo-logo-full-light-bg.svg'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'

const date = Date.now()
const year = new Date(date).getFullYear()

export const Footer = () => (
  <footer>
    <div>&#64;CalaoJuanPablo</div>
    <div>
      <picture>
        <Link href='/'>
          <a>
            <Image src={logoImage} alt='CalaoJuanPablo logo' />
          </a>
        </Link>
      </picture>
      <div>
        <p>{year}. Designed with Figma,</p>
        <p>
          built with <a href='https://nextjs.org'>NextJS</a>
        </p>
      </div>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/calaojuanpablo/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/CalaoJuanPablo'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/CalaoJuanPablo'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)
