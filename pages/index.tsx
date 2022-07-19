import { HeadSeo } from '../src/components/head-seo'
import { HomePage } from '../src/pages/home'

export default function Home() {
  const title = 'Juan Pablo Calao | Frontend Developer'
  const description =
    "I am a Web Developer using NextJS and Node. I don't just write code, but I have aim to understand clients' business models to develop the best solution for end-users."

  return (
    <>
      <HeadSeo title={title} description={description} />
      <HomePage />
    </>
  )
}
