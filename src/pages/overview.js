import React from "react"
import NavBar from "@/components/NavBar";
import Head from "next/head";

const Overview = (props) => {

  return (
    <>
      <Head>
        <title>Web3-Wiki | Overview</title>
        <meta name="description" content="Web3 wiki application,explaining topics in web3 like crypto, DAOS, tokenomics,blockchain, zk technology, smart contracts" />
      </Head>
      <main className="flex w-full min-h-screen">
        <NavBar />
    
        <div className="flex flex-col w-full h-1/6 text-5xl font-semibold mx-20 mt-20" >
            <h1>So what exactly is Web3?</h1>
            <p className="border border-black text-xl py-8">
                Web3 is an umbrella term for the vision of a better internet; an internet with an added identity, money, and social layer. An internet built upon open protocols that value transparency and innovation. An internet that siphons power away from big corporations, and instead places you at the helm of your data.</p>

                <div className="flex flex-col items-center justify-between border border-black w-full text-2xl">
                <h3>So here's the breakdown.</h3>
                <div className="flex py-10">
               
                   <div className="border border-black flex flex-col w-1/3">
                    <h5 className="py-5 flex justify-center">The First Internet - Web1</h5>
                    <p className="text-lg pt-7 px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                   <div className="border border-black flex flex-col w-1/3">
                    <h5 className="pt-5 pb-0 flex justify-center">The Second Internet - Web2</h5>
                    <span className="text-lg text-hotOrange font-bold flex justify-center">(Current predominant iteration)</span>
                    <p className="text-lg pt-7 px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                   <div className="border border-black flex flex-col w-1/3">
                    <h5 className="py-5 flex justify-center">The Next Iteration - Web3</h5>
                    <p className="text-lg pt-7 px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                </div>
                   
                </div>

        </div>
        
    </main>
    </>
  )
};

export default Overview;
