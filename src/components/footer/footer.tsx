import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import styles from 'styles/footer.module.scss'

const date = Date.now()
const year = new Date(date).getFullYear()

export const Footer = () => (
  <footer className={styles.footer}>
    <div className='container'>
      <div className={styles['footer-bottom-info']}>
        <p className={styles['footer-bottom-info-copy']}>
          {year}. Designed with Figma,
          <br />
          built with <a href='https://nextjs.org'>NextJS</a>
        </p>
        <ul className={styles['footer-bottom-info-links']}>
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
    </div>
  </footer>
)
