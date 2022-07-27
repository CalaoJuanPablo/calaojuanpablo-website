import Link from 'next/link'
import { FaPenNib, FaCode } from 'react-icons/fa'
import Image from 'next/image'
import logoImage from '../../../public/calaojuanpablo-logo-full-light-bg.svg'
import styles from 'styles/home-page.module.scss'

export const HomePage = () => (
  <>
    <section className={`section ${styles.intro}`}>
      <div className='container'>
        <h3>Hello,</h3>
        <h1>I&apos;m Juan Pablo Calao</h1>
        <h4>Frontend developer</h4>
        <p className={styles.mail}>
          <a href='mailto:me@calaojuanpablo.com'>me@calaojuanpablo.com</a>
        </p>
      </div>
    </section>
    <section id='about' className='section'>
      <div className='container'>
        <h1>about me</h1>
        <p>
          I am a frontend developer with deep knowledge about HTML, CSS, and
          JavaScript. I&apos;ve worked on a variety of project in different
          industries, from digital marketing education to video games and
          Esports. I am curious, proactive and with a holistic approach in the
          apps and sites I build. Very passionate about learning and teaching.
        </p>
        <div className={styles['more-about-link']}>
          <Link href='/about'>
            <a className='button'>more about me</a>
          </Link>
        </div>
      </div>
    </section>
    <section id='what-i-do' className='section'>
      <div className='container'>
        <h1>what i do</h1>
        <div className='grid column-2'>
          <div className='skill-card'>
            <div className='icon'>
              <FaPenNib />
            </div>
            <h3>web design</h3>
            <span className='border'></span>
            <p>I love clean, minimal and beautiful websites</p>
          </div>
          <div className='skill-card'>
            <div className='icon'>
              <FaCode />
            </div>
            <h3>web development</h3>
            <span className='border'></span>
            <p>I focus in simplicity, reliability and performance</p>
          </div>
        </div>
      </div>
    </section>
    <section id='more-about-me' className='section'>
      <div className='container'>
        <h1>want to know more about me?</h1>
        <ul>
          <li>
            You can check my social media (
            <a
              href='https://twitter.com/CalaoJuanPablo'
              target='_blank'
              rel='noreferrer'
            >
              twitter
            </a>
            ,
            <a
              href='https://www.linkedin.com/in/calaojuanpablo/'
              target='_blank'
              rel='noreferrer'
            >
              linkedin
            </a>
            ,
            <a
              href='https://www.instagram.com/calaojuanpablo/'
              target='_blank'
              rel='noreferrer'
            >
              instagram
            </a>
            ).
          </li>
          <li>
            Some of my work and interests in code on
            <a
              href='https://github.com/CalaoJuanPablo'
              target='_blank'
              rel='noreferrer'
            >
              github
            </a>
            .
          </li>
          <li>
            Read my personal{' '}
            <Link href='.blog'>
              <a>blog</a>
            </Link>{' '}
            (sorry for non spanish speakers 😔. For now it will only be in
            spanish).
          </li>
          <li>
            If you want to work with me, you can send an email to
            <a href='mailto:me@calaojuanpablo.com'></a>
          </li>
        </ul>
        <div className='buttons'>
          <a href='#' className='button'>
            contact me
          </a>
          <a href='#' className='button'>
            go to my blog
          </a>
        </div>
      </div>
    </section>
    <section>
      <p className={styles.handle}>&#64;CalaoJuanPablo</p>
      <figure className={styles['bottom-logo-figure']}>
        <a className={styles['footer-logo-link']}>
          <Image src={logoImage} alt='CalaoJuanPablo logo' />
        </a>
      </figure>
    </section>
  </>
)
