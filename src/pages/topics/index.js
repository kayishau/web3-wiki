import React from "react"
import Link from "next/link"
import { useState, useEffect } from 'react'

const Topics = (props) => {

  let [topics, setTopics] = useState([])

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data)
      console.log('data', data);
    })
  },[])

  return (

    <div>
       <Link href='/topics/new'>Create new topic</Link>

      {topics.map((topic, index) => {
        return (
          <div key={index}>
            {topic.picture}
            {topic.title}
            {topic.text}
            <Link href={'/topics/' + topic._id}>Read more</Link>
          </div>
        )
      })}
       
    </div>
  )
};

export default Topics;


const getTopics = async () => {
  const response = await fetch('http://localhost:3002/topic')
  return await response.json()
}

