import React from "react"
import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/router"
import Head from "next/head";
import NavBar from "@/components/NavBar";

const EditTopic = (props) => {

    const router = useRouter()
    const id = router.query.id
    const [loading, setLoading] = useState(false);
    let [topic, setTopic] = useState()

    const [state, setState] = useState({
        picture: props.picture,
        title: props.title,
        text: props.text,
        sectionOneTopic: props.sectionOneTopic,
        sectionOneText: props.sectionOneText,
        sectionTwoTopic: props.sectionTwoTopic,
        sectionTwoText: props.sectionTwoText,
        sectionThreeTopic: props.sectionThreeTopic,
        sectionThreeText: props.sectionThreeText,
    })

    const getTopic = useCallback( async () => {
        const response = await fetch(`http://localhost:3002/topic/${id}`);
          const data = await response.json();
          data.topic && setState(data.topic);
        
      }, [router.query.id]);
    
    //   useEffect(() => {
    //     getTopic();
    //   }, [getTopic]);
    
    useEffect(() => {
        if (!id) return
        
          getTopic(router.query.id).then((data) => {
              setTopic(data)
          }).catch((err) => {
              console.log(err)
              // In a professional setting, there needs to be error handling
          })
      }, [id])

      const handleChange = (event) => {
        const {value, name} = event.target
        setState((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch(`http://localhost:3002/topic/${id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(state),
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
          getTopic()
        }
      };

      const deleteTopic = async (id) => {
        const response = await fetch('http://localhost:3002/topic/'+id, {
          method: "DELETE",
        })
        return await response.json()
      }



  return (
    <>
     <Head>
        <title>Web3-Wiki | Overview</title>
        <meta name="description" content="Web3 wiki application,explaining topics in web3 like crypto, DAOS, tokenomics,blockchain, zk technology, smart contracts" />
      </Head>
      <main className="flex w-full min-h-screen text-lightGrey">
        <NavBar />
     <div>
        <h2>Edit your topic</h2>
        <form onSubmit={handleSubmit}>
        <input className="bg-[blue]" onChange={handleChange} name="picture"  value={state.picture || ""}type="text" placeholder="Update picture URL" />
        <input className="bg-[blue]" onChange={handleChange} name="title" value={state.title || ""} type="text" placeholder="Update Title" />
        <input className="bg-[blue]" onChange={handleChange} name="text" value={state.text || ""} type="text" placeholder="Update Description" />
         {/* <input type="submit" value="SUBMIT"/> */}
         <button disabled={loading}>
                  {loading ? "Updating..." : "Update Topic"}
        </button>
        <button onClick={() => deleteTopic("id")}>X</button>
        </form>
    </div>
         {/* <div>
            {topic?.picture}
            {topic?.title}
            {topic?.text}
            <button onClick={deleteTopic}>x</button>
       </div> */}
       </main>
    </>
   
  )
};

export default EditTopic;



// delete button

  
