import React from "react"

const NewTopic = (props) => {
  return (
    <div>
    {/* Create form and feild, submit button */}
     
    </div>
  )
};

export default NewTopic;

// Create function 
const createTopic = async (data) => {
    const response = await fetch('http://localhost:3002/topic', {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
  
    return await response.json()
  }