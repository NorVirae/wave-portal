import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { injected } from '../component/wallet/connector'
import { useWeb3React} from '@web3-react/core'

const Home: NextPage = () => {

  const {active, account, library, connector, activate, deactivate} = useWeb3React()

  async function connect() {
    try {
      const result = await activate(injected)
      console.log(result)
      console.log("-------------------------------------------------")
      console.log
    }catch(err){
      console.log(err)
    }
  }

  async function disconnect() {
    try{
      const result = await deactivate()
      console.log(result)
    }catch(err){
      console.log(err)
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
