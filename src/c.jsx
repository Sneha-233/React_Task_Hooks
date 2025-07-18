import React from "react";
import D from "./d";

const C=(props)=>{
    const{name,age}=props
  return(



    <>
    <h3>this is component C</h3><hr />
    <D name={name} age={age}/>
    </>
  )
}

export default C