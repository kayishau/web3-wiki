import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import dao from "../../../public/images/topics/DAO.png"


const Topics = (props) => {
  let [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data);
      console.log("data", data);
    });
  }, []);


//   const fullCard = ({title, topic, img, text}) => {

//     return (
//         <article className="w-full flex flex-col items-center justify-center border border-solid border-light bg-light p-6 relative shadow-2xl">

//             <Image src={img} alt={topic.title} className="w-full h-auto" />
        

//         <div className="w-full flex flex-col items-start justify-between mt-4">
//             <span className=" text-primary font-medium text-xl">{topic.text}</span>
            
//             <h2 className="my-2 w-full text-left text-1xl font-semibold">{topic.title}</h2>
//         </div>
//         </article>
//     )

// }

  return (
    <>
      <main className="flex text-lightGrey">
        <NavBar />

        <div className="min-h-screen min-w-screen flex flex-col">
        <div className="flex w-full justify-start text-4xl font-bold py-10 px-10 ">
            <h1>Explore the Different Concepts</h1>
          </div>

          <div className="flex w-full justify-start text-xl font-semibold pl-10 pb-5">
            <Link href="/topic/new">Create new topic</Link>
          </div>

          <div className="flex mx-10">
            {/* <div className="flex"> */}
              
           
           
          {topics.map((topic, index) => {
            return (
              <div key={index} className="border border-black pl-10 pr-10 mr-20 h-full ">
                {topic.picture}
                {topic.title}
                {topic.text}
                <div>
                 <Link href={`/topic/${topic._id}`}>Read more</Link>
                </div>
               
              </div>
            );
          })}
          </div>
          
          </div>
        {/* </div> */}

      </main>
    </>
  );
};

export default Topics;

const getTopics = async () => {
  const response = await fetch("http://localhost:3002/topic");
  return await response.json();
};
