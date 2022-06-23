import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { injected } from '../component/wallet/connector'
import { useWeb3React} from '@web3-react/core'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Home: NextPage = () => {
  
  const [connection, setConnection] = useState<string>("Injected")

 
  
  const switchOrAddNetworkToMetamask = async () => {
    try{
      await window.ethereum.request({
        method:'wallet_switchEthereumChain',
        params: [{ chainId: '56' }]
      })
    }catch(err){
      console.log(err)
    }
  }

  const connect = async () => {
    if (connection === "Injected"){
      await
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 connector</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <button onClick={connect}>
            connect metamask
            {active}
          </button>

          {active? <span>Connected with <b>{account}</b></span>: <span>Not connected</span>}

          <button onClick={disconnect}>
            Disconnect
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export default Home
