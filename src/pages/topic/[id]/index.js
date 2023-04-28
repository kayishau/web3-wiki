import React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"


const Topic = (props) => {

    const router = useRouter()
    const id = router.query.id

    const [topic, setTopic] = useState()

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
         
            {topic?.picture}
            {topic?.title}
            {topic?.text}
            <Link href={`/topic/${topic._id}/edit`}>Edit topic</Link>
    </div>
  )
};

export default Topic;

// Delete function

const deleteTopic = async (id) => {
    const response = await fetch('http://localhost:3002/topic/'+id, {
      method: "DELETE"
    })
    return await response.json()
  }
  
  const getTopic = (id) => {
    console.log(id);
        return fetch(`http://localhost:3002/topic/${id}`, {
      method: "GET"
    }).then((response) => response.json())
   
  }


// for the edit page (inside of the ID folder)
// create a function to edit the topic 
// grab the topic data and create a state for it, set the default values in the form accordingly to the values in the field => reference this file for grabbing the data and setting as state value
// carbon footprint has reference for form fields and setting defaults

