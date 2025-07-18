import React from "react";
import { useEffect } from "react";

const App=()=>{
 useEffect(()=>alert("hiii Sneha"),[])


  return(


    <>
    
    
    </>
  )


}


export default App






// import React from "react";
// import { useState } from "react";



// const App=()=>{

//   const [count,setcount]=useState(0);

//   return(

//     <>
    
//     <h1>Initial Count:{count}</h1>
//     <button onClick={()=>{setcount(count+1)}}>increase Count</button>
//     <button onClick={()=>{setcount(count-1)}}  >decrease  Count</button>
//     </>
//   )
// }

// export default App




// import { useState,useEffect } from "react";

// function App() {



//   const[name,setname]=useState('sneha')

//   const[color,setcolor]=useState('red')

//   const[bgcolor,setbgcolor]=useState('blue')


//   const[text,settext]=useState("hiii, this is the Ending....!!")


//   useEffect(()=>alert("hiii"),[color])

//   useEffect(()=>{

//     setTimeout(setbgcolor('black'),10000)
//   },[])


//   useEffect(()=>{
//     setTimeout(settext("there is no ending , Sorryy..."),1000)
//   },[])
  
 

  
//   return (
  

//     <>
    
//     <h1>Hello,this is a useState() and useEffect() hooks</h1><hr /><br /><br />
//     <h2>useState()Hook :-</h2><br />

//    <h1> Hello {name} , This is a useState()Hook</h1>
//    <button onClick={()=>{setname('Nikita')}}>updatename</button><br />


//    <h1 style={{color:color}}>Hello this is a color {color} </h1>
//    <button onClick={()=>{setcolor('green')}}>changecolor</button><hr />

//    <h2>useEffect()hook:-</h2><br />

//    <h1 style={{color:color , backgroundColor:bgcolor}}>Hello {name} , This is a useEffect Hook()</h1>



//    <hr /><br /><br />
//    <h1>{text}</h1>

    
    
//     </>

//   );
// }

// export default App;
