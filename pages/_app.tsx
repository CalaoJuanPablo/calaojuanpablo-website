import type { AppProps } from 'next/app'
import { Layout } from '../src/components/layout'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
