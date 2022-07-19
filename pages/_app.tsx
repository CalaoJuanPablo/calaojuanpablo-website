import type { AppProps } from 'next/app'
import { NavBar } from '../src/components/nav-bar'
import { Footer } from '../src/components/footer'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
