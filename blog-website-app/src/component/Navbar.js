import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQQveR6dv9e3o-yMxs520WWMjwLAKxzlxzQ&usqp=CAU" alt = "" width="30" height="24" class="d-inline-block align-text-top"/>
                <a className="navbar-brand" href="#">Portfolio
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-tabs ms-auto">
                        <li className="nav-item">
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        <Link to = "/" className = "nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        {/* <a className="nav-link" href="#">About</a> */}
                        <Link to = "/about" className = "nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to = "/project" className = "nav-link">Project</Link>
                        </li>
                        <li className="nav-item dropdown">
                        </li>
                    </ul>
                </div>
                
            </div>
            </nav>
        </div>

        
    )
}

export default Navbar

