import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Web3ReactProvider} from ''

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
