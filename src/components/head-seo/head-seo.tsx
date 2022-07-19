import Head from 'next/head'

interface CustomHeadProps {
  title: string
  description: string
}

export const HeadSeo: React.FC<CustomHeadProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' href='/calaojuanpablo-logo-full-light-bg.svg' />
  </Head>
)
