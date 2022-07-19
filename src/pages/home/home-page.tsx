import styles from 'styles/home-page.module.scss'

export const HomePage = () => (
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
)
