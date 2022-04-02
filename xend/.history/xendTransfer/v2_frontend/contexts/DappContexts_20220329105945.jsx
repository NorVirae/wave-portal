import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// const { ethereum } = window;
import { createBankContract } from "../utilis/bank";

export const DappContext = React.createContext();



export const DappProvider = ( { children } ) =>
{
    const [ currentAccount, setCurrentAccount ] = useState( "" );
    const [ manager, setManager ] = useState( "" );

    const checkIfWalletIsConnect = async () =>
    {
        if ( !window.ethereum ) return alert( "Please install MetaMask." );
        else if ( window.ethereum )
        {
            console.log("WINDOW ETHEREUM EXECUTED!", window.ethereum)
            try
            {
               

                const accounts = await window.ethereum.request( { method: "eth_accounts" } );
                console.log( accounts );

                if ( accounts.length )
                {
                    setCurrentAccount( accounts[ 0 ] );

                }
                else
                {
                    alert( "Please connect your wallet." );
                    console.log( "No Accounts found" );
                }
            } catch ( error )
            {
                console.log( error );

                throw new Error( "No ethereum object" );
            }
        }
        

    }; 
    const connectWallet = async () =>
    {
        if ( typeof window.ethereum !== 'undefined' )
        {
            try
            {
                if ( !window.ethereum ) return alert( "Please install MetaMask." );

                const accounts = await window.ethereum.request( { method: "eth_requestAccounts", } );

                setCurrentAccount( accounts[ 0 ] );
                window.location.reload();
            } catch ( error )
            {
                console.log( error );

                throw new Error( "No ethereum object" );
            }
        }
       
    };
    // const DisconnectWallet = () =>
    // {
    //     setCurrentAccount( undefined );
    //     // window.location.reload();
    // }
    const checkManager = async() =>
    {
        const bank = createBankContract();
        const manager = await bank.admin();
        setManager( manager );
    }

    useEffect(() =>
    {

        if ( typeof window.ethereum !== 'undefined' )
        {
            checkIfWalletIsConnect();
            checkManager();
        }
        
        
    },[]);

    
  return (
      <DappContext.Provider value={ {
          
          currentAccount,
          connectWallet,
          manager,
           
      }}>
        {children}
    </DappContext.Provider>
  )
}
