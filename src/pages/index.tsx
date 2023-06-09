import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/conponents/layout'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Layout>
          <a href="/hello-world" className='underline'>Hello world</a> <br />
          <a href="/coding-hello-world" className='underline'>Coding Hello World: read & learn</a> <br />
          <a href="/code" className='underline'>Code</a>
        </Layout>
      </main>
    </>
  )
}
