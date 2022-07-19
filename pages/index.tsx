import { Head } from '../src/components/head'
import Image from 'next/image'

export default function Home() {
  const title = 'Juan Pablo Calao | Frontend Developer'
  const description =
    "I am a Web Developer using NextJS and Node. I don't just write code, but I have aim to understand clients' business models to develop the best solution for end-users."

  return (
    <div>
      <Head title={title} description={description} />
    </div>
  )
}
