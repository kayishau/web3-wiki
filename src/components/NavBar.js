import Link from "next/link";
import React from "react"


const CustomLink = ({href, title, className=""}) => {
    
    return (
        <Link href={href} className={`${className} relative`}>
            {title}

           
        </Link>
    )
}

const NavBar = () => {

    // style={{ writingMode: 'vertical-rl' }} 
  return (
    <header className="w-1/6 min-h-screen px-22 bg-hotOrange ">
        <nav>
        {/* transform -rotate-90 [writing-mode:vertical-lr] ... */}
            {/* <div className="border border-black"> */}
            <div className="flex flex-col items-center gap-40 p-20 text-3xl font-bold  ">

            <div className="h-20 w-20 transform -rotate-90 hover:underline">
                    <CustomLink href="/resources" title="Extra"/>
                </div>
                <div className="h-20 w-20 transform -rotate-90 hover:underline ">
                    <CustomLink href="/topic" title="Topics"/>
                </div>
                <div className="h-20 w-20 transform -rotate-90 hover:underline">
                     <CustomLink href="/overview" title="Overview"/>
                </div>
                <div className="h-20 w-20 transform -rotate-90 hover:underline">
                    <CustomLink href="/" title="Home"/>
                </div>

            </div>
               
          
         
            {/* </div> */}
         
        </nav>
        
    </header>
  )
};

export default NavBar

     