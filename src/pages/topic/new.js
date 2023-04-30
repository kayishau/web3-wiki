import React from "react"
import { useState } from 'react';

const NewTopic = (props) => {

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        picture: " ",
        title: " ",
        text: " ",
        sectionOneTopic: " ",
        sectionOneText: " ",
        sectionTwoTopic: " ",
        sectionTwoText: " ",
        sectionThreeTopic: " ",
        sectionThreeText: " ",
    })

    const handleChange = (event) => {
        const {value, name} = event.target
    
        setState((prev) => ({ ...prev, [name]: value }))
        console.log("name");
      }; 
   
// Create Function
const createTopic = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await fetch('http://localhost:3002/topic/', {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setState({
        picture: "",
        title: "",
        text: "",
        sectionOneTopic: "",
        sectionOneText: "",
        sectionTwoTopic: "",
        sectionTwoText: "",
        sectionThreeTopic: "",
        sectionThreeText: "",
      });
      setLoading(false)
    //   return await response.json()
    }
  }

  return (
    <div>
        {/* <Head></Head> */}
        <h2> Create (+) - What's new in Web3?</h2>
        <form onSubmit={createTopic}>
        <input className="bg-[blue]" onChange={handleChange} name="picture"  value={state.picture}type="text" placeholder="Enter picture URL" />
        <input className="bg-[blue]" onChange={handleChange} name="title" value={state.title} type="text" placeholder="Enter Title" />
        <input className="bg-[blue]" onChange={handleChange} name="text" value={state.text} type="text" placeholder="Enter Description" />
        {/* <input type="submit" value="SUBMIT"/> */}
        <button disabled={loading}>
                  {loading ? "Creating..." : "Create Topic"}
        </button>
        </form>
     

    </div>
  )
};

export default NewTopic;


