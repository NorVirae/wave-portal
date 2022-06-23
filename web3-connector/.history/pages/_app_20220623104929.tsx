import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Web3ReactProvider} from '@web3-react/core'
import Web


function getLibrary(provider) {
  return new Web3(provider)
}
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
