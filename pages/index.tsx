import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PHOTO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="text-red-500">
        
      <p>MAIN PLACEHOLDER</p>

      </main>

      <footer>
        
       <p> FOOTER PLACEHOLDER </p>

      </footer>
    </>
  )
}
