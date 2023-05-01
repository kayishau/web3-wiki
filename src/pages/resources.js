import React from "react"
import NavBar from "@/components/NavBar";
import Head from "next/head";


const Extra = (props) => {
  return (
    <>
    <Head>
      <title>Web3-Wiki | Resources </title>
      <meta name="description" content="Web3 wiki application,explaining topics in web3 like crypto, DAOS, tokenomics,blockchain, zk technology, smart contracts" />
    </Head>
    <main className="flex w-full min-h-screen">
      <NavBar />
      <div className="flex m-5">


      <div className="m-5 border border-black">
        <h1 className="text-2xl">Websites to checkout</h1>
        <ul>
          <li>Ethereum</li>
          <li>Metamask</li>
          <li>EthGlobal</li>
          <li>Mirror xyz</li>
        </ul>
      </div>
      <div  className="m-5 border border-black" >
        <h1 className="text-2xl">Projects & Usecases</h1>
        <ul>
          <li>Koko DAO</li>
          <li>Litter Token</li>
          <li>Zk scroll</li>
        </ul>
      </div>
      <div className="m-5 border border-black">
        <h1 className="text-2xl">Places to learn</h1>
        <ul>
          <li>Alchemy University</li>
         
        </ul>
      </div>

      </div>
   
      </main>
      </>
  )
};

export default Extra;
