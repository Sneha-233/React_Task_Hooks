import React from "react";
import { useContext } from "react";
import { user_age, user_name ,user_skill} from "./context/context";

const Consumer=()=>{

    const username=useContext(user_name)
    const userage=useContext(user_age)
    const userskill=useContext(user_skill)


    return(


        <>
        
        <h1>UserName: <mark>{username}</mark></h1>
        <h1>UserAge: <mark>{userage}</mark></h1>
        <h1>UserSkill: <mark>{userskill}</mark></h1>
        
        </>
    )
}

export default Consumer