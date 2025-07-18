import { NavLink } from "react-router-dom"


const Navbar=()=>{

    


    return(

        <>
        
        <div className="container ">
            <div className="row">
                <div className="col-md-12">
                    <div className="navbar navbar-expand-lg  bg-dark text-center">
                        <div className="nav-brand text-light px-5 fw-bold fs-1">Router</div>
                        <div className="nav-items">
                           
                           <ul className="navbar-nav gap-5" type="none">
                            <NavLink className="text-decoration-none text-light fs-4"  to="/"><li className="nav-item ">Home</li></NavLink>
                            <NavLink className="text-decoration-none text-light fs-4"  to="/about"><li className="nav-item">About</li></NavLink>
                            <NavLink className="text-decoration-none text-light fs-4"  to="/contact/sneha/23"><li className="nav-item">Contact</li></NavLink>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>


    )
}


export default Navbar