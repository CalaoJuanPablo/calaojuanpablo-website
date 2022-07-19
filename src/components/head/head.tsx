import { default as NextHead } from 'next/head'

interface HeadProps {
  title: string
  description: string
}

export const Head: React.FC<HeadProps> = ({ title, description }) => (
  <NextHead>
    <title>{title}</title>
    <meta name='description' content={description} />
    <link rel='icon' href='/calaojuanpablo-logo-full-light-bg.svg' />
  </NextHead>
)
