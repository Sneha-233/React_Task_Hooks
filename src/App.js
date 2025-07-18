import React from "react";
<<<<<<< HEAD
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import Navbar from "./navbar";

function App() {
  return (
   
    <>
    
    <Router>

      <Navbar/>

    <Routes>


    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact/:name/:id" element={<Contact/>}></Route>

    </Routes>

    </Router>
    
    
    </>


  );
}

export default App;
=======

const App=(props)=>{

  return(


    <>
    <center>
    <div style={{width:"30%",textAlign:"center",border:"2px solid black"
    }}>
      <h1 >Profile Card</h1>
      <hr/>
      <h2>Name:{props.name}</h2>
      <h2>Age:{props.age}</h2>
      <h2>Location:{props.location}</h2>
    </div>
    </center>
    </>
  )
}

export default App




// import React from "react";
// import A from "./a";
// const App=()=>{
//   return(



//     <>
    
//     <h1>hiii this is a parent component</h1><hr/>
//     <A    name='Sneha'
//           age={22}
//     />
    
//     </>
//   )
// }

// export default App
>>>>>>> aaa3a97 (hooks_3 push)
