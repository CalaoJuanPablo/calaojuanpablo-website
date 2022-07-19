import { default as NextHead } from 'next/head'

interface HeadProps {
  title: string
  description: string
}

export const Head: React.FC<HeadProps> = ({ title, description }) => (
  <NextHead>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' href='/calaojuanpablo-logo-full-light-bg.svg' />
  </NextHead>
)
