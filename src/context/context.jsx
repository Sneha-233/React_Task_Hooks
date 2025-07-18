import React from "react";
import Consumer from "../consumer";
import { createContext } from "react";


const user_name=createContext()
const user_age=createContext()
const user_skill=createContext()

const Context=()=>{
    

    return(


        <>


        <user_name.Provider value="Sneha">

            <user_age.Provider value="22">
                <user_skill.Provider value="React">
                <Consumer/>
                </user_skill.Provider>
            </user_age.Provider>
        </user_name.Provider>
        
        
        
        </>
    )
}

export default Context
export {user_age,user_name,user_skill}