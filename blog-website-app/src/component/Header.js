import React from 'react'
import Typed from 'react-typed'
import {Link} from 'react-router-dom'
import image2 from '../images/image2.jpg'

function Header(){
    return(
        <div className = "body-style">
        <div className = "container-about">
             <img src = {image2} alt = "about" className = "rounded mx-auto d-block img-fluid" style = {{width: "100vw", height: "auto"}} />
                <h5 className = "header-text">Welcome to portfolio website</h5><br/>
                <Typed 
                    className = "type-style"
                    strings = {["The hardest choices requires strongest will"]}
                    typeSpeed = {40}
                    />
                <h3>About me</h3>
                <div className = "container">
                    <p className = "p-text">
                        Hi, I'am Nagaveni.<br/> I persuing electronics and communication engineering at the moment.<br/>
                        Self educated in full-stack web developement. Professionally educated in the area of <br/>electronics and communication.<br/> More about me <br/>
                        <Link to = "/about">click here</Link>
                    </p><hr/>
                    <p className = "p-text">
                        To view my resume click here<br/>
                        <Link to = "/project">Resume </Link>
                    </p>
                </div>
                
        </div>
        </div>
    )
}

export default Header
