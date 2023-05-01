import Link from "next/link";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import { DownArrow } from "@/components/Icons";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Web3-Wiki</title>
        <meta
          name="description"
          content="Web3 wiki application,explaining topics in web3 like crypto, DAOS, tokenomics,blockchain, zk technology, smart contracts"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full min-h-screen">
        <div className="flex flex-col w-full text-lightGrey items-center my-10">
          <div className="py-11 text-6xl">
          <h2>Web3 Wiki</h2>
          </div>
          <div className="px-40">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        
          </div>
          <div className="flex text-mediumOrange bg-mediumOrange h-3/4 w-full border border-mediumOrange mt-20">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        
          
        </div>
        <div className="w-1/12 h-auto ml-10 text-lightGrey">
        <Link href="/">Home</Link>
        <Link href="/overview">Overview</Link>
        <Link href="/topic">Topics</Link>
        <Link href="/resources">Extra</Link>
          <DownArrow />
        </div>
      </main>
    </>
  );
};
export default HomePage;

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
{
  /* <button onClick={createTopic}>Create new topic!</button>
        <button onClick={() => deleteTopic("id")}>X</button> */
}
