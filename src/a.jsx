import React from "react";
import B from "./b";

const A=(props)=>{
    const{name,age}=props
  return(



    <>
    <h2>hii this is a component A</h2>
    <hr />
    <B name={name} age={age}/>
    
    
    </>
  )
}

export default A
