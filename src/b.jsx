import React from "react";
import C from "./c";

const B=(props)=>{
     const{name,age}=props
  return(



    <>
    <h3>this is component B</h3>
    
    
    <hr />
    <C name={name} age={age}/>
    
    </>
  )
}

export default B