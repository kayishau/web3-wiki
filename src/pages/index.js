import Link from "next/link"
import Head from "next/head"
import TransitionEffect from "@/components/TransitionEffect"



const HomePage = () => {

  return (
    <>
   
      <Head>
        <title>Web3-Wiki</title>
        <meta name="description" content="Web3 wiki application,explaining topics in web3 like crypto, DAOS, tokenomics,blockchain, zk technology, smart contracts" />
      </Head>

     <TransitionEffect />

      <div> 
        
        <h2>Web3 Wiki</h2>
        
 
      </div>
    </>
  
    
  )
}
export default HomePage


// This function is called before the page load - grabs the data from our database/server and setting it as the props for the container
// export const getStaticProps =  async () => {
//   const response = await fetch('http://localhost:3002/topic').catch((err) => {
//     console.log(err)
//   })
//   const data = await response.json()
//   return {
//     props: {
//       topics: data
//     }
//   } 
// }

// dekete button
{/* <button onClick={createTopic}>Create new topic!</button>
        <button onClick={() => deleteTopic("id")}>X</button> */}