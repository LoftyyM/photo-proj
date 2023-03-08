import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { Encode_Sans } from '@next/font/google'

const encode = Encode_Sans({
  weight: "400",
  subsets: ["latin"],
  variable:"--encode-sans"
}
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${encode.variable} font-sans`}>
  <Component
   {...pageProps}
   />
   </div>
   
   )
}
