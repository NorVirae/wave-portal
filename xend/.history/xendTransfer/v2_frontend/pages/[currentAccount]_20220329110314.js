import React, { useState, useContext, useEffect } from 'react';
import { Navbar } from ".././components";
// import Token from "../utilis/migrations/Token.json";
import { createSomContract, createJamContract, createHarContract } from "../utilis/tokens";



const TokenCard = ( { title, symbol, totalSupply } ) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        {/* <div className={ `w-10 h-10 rounded-full flex justify-center items-center ${ color }` }>
            { icon }
        </div> */}
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{ title }</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                { symbol }
            </p>
            <p className="mt-1 text-white text-sm md:w-9/12">
                { totalSupply }
            </p>
        </div>
    </div>
);

export default function currentAccount ()
{

    const [ ST, setST ] = useState( [] );
    const [ JT, setJT ] = useState([] );
    const [ HT, setHT ] = useState( [] );
    const SomToken = async () =>
    {
        const ST =  createSomContract();
        const token = await ST.getSummary();
        setST( token );
        
    }
    const JamToken = async () =>
    {
        const JT = createJamContract();
        const token = await JT.getSummary();
        setJT( token );
    
    }
    const HarToken = async () =>
    {
        const HT = createHarContract();
        const token = await HT.getSummary();
        setHT( token );
        
    }
    

    console.log( HT );

    useEffect( () =>
    {

        if ( typeof window.ethereum !== 'undefined' )
        {
            
            JamToken();
            SomToken();
            HarToken();
        }


    }, [] );


    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <div className="flex w-full justify-center items-center">
                    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                        <div className="flex-1 flex flex-col justify-start items-start">
                            <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                                Welcome Back {}
                
                            </h1>
                            <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                                This is your dashboard, you can see your current account and all your transactions
                                At the right handside is your Tokens
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col justify-start items-center">
                            <TokenCard
                                // color="bg-[#2952E3]"
                                title={ ST[ 0 ] }
                                symbol={ ST[ 1 ] }
                                // icon={ <BsShieldFillCheck fontSize={ 21 } className="text-white" /> }
                            
                            />  

                            <TokenCard
                                // color="bg-[#F84550]"
                                title={ JT[ 0 ] }
                                symbol={ JT[ 1 ] }
                   
                            />

                            <TokenCard
                                title={ HT[ 0 ] }
                                symbol={ HT[ 1 ] }
                                
                                />
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
