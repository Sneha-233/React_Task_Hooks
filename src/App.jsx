import { useReducer, useRef } from 'react'
import './App.css'

function App() {
  // const [add, setadd] = useState('+')
  // const [sub, setsub] = useState('-')
  // const [mult, setmult] = useState('*')
  // const [div, setdiv] = useState('/')

  const reducer=(state,action)=>{

   switch(action.type){
    case '+':return {count:state.count+1}
    case '-':return {count:state.count-1}
    default: return {count:state.count}
   }
  }

  const[state,dispatch]=useReducer(reducer,{count:0})


  // *********************************

  // const data=useRef()

  // const getdata=()=>{

  //  alert()
  // }


  const getdata=()=>{

    // alert()
  }

  return (

    
    <>
     
    <h1>useReducer Hook</h1><hr />

    <h2>Initial Count:{state.count}</h2>
      <button onClick={()=>dispatch({type:'+'})}>update count</button>
      <button onClick={()=>dispatch({type:'-'})}>reduce count</button><br /><br /><br />
    {/* <h2>Initial Count:{state.count}</h2> */}

<label htmlFor="">Enter Your Name:</label>
<input type="text" onChange={getdata()} ref={data}/>


    </>
  )
}

export default App
