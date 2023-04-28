import React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"


const Topic = (props) => {

    const router = useRouter()
    const id = router.query.id

    let [topic, setTopic] = useState()

    useEffect(() => {
      if (!id) return
    
        getTopic(router.query.id).then((data) => {
            setTopic(data)
        }).catch((err) => {
            console.log(err)
            // In a professional setting, there needs to be error handling
        })
    }, [id])

    if (!topic)

    return (
        <div>
            <h1>404 TOPIC NOT FOUND.</h1>
        </div>
    )

  return (
    <div>
         {router.query.id}
            {topic?.picture}
            {topic?.title}
            {topic?.text}
          
    </div>
  )
};

export default Topic;

// Delete function

const deleteTopic = async (id) => {
    const response = await fetch('http://localhost:3002/topic/'+ id, {
      method: "DELETE"
    })
    return await response.json()
  }
  
  const getTopic = (id) => {
    console.log(id);
        return fetch('http://localhost:3002/topic/'+ id, {
      method: "GET"
    }).then((response) => response.json())
   
  }
