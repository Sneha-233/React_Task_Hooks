import { useLocation, useParams } from "react-router-dom"

const Contact=()=>{

    const data=useParams()
    console.log(data)

    const loc=useLocation()
    console.log(loc)
    
    return(



        <>
        
        <h1>Hiiii this is a contact component</h1>

        <h2>name:{data.name}</h2>
        <h2>id:{data.id}</h2>

        </>
    )
}



export default Contact