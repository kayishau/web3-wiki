import Link from "next/link"

const HomePage = () => {

  return (
  
    <div> 
      {/* <button onClick={createTopic}>Create new topic!</button>
      <button onClick={() => deleteTopic("id")}>X</button> */}
      <h2>Web3 Wiki</h2>
     
    </div>
    
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