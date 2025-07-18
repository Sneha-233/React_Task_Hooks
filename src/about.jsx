import { useNavigate } from "react-router-dom"




const About=()=>{

    const back=useNavigate()

    
    return(



        <>
        
        <h1>Hiiii this is a about component</h1>

        <button onClick={()=>{( back(-1))}}>go back</button>
        <button onClick={()=>{back(+1)}}>go front</button>
        <button onClick={()=>{back(-2)}}>go direct</button>
        <button onClick={()=>{back('/')}}>gohome</button>
        </>
    )
}




export default About