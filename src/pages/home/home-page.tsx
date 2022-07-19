import Link from 'next/link'
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
  </>
)
