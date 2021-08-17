import React from 'react'
import {GrFacebook} from 'react-icons/gr'
import {SiInstagram, SiLinkedin} from 'react-icons/si'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

function Footer(){
    return(
        <footer className = "page-footer font-small" style = {{backgroundColor: "#b2ebf2"}}>

       <div className = "container">
           <div className = "row-style">
                <div className = "row">
                    <div className = "col-md-6">
                        <h4>MOONBOW_FAIRY</h4>
                    </div>
                    <div className = "col-md-3">
                        <h4>More about me < IoIosArrowDroprightCircle/></h4>
                    </div>
                    <div className = "col-md-1">
                        <a href = "www.google.com" className = "icons"><GrFacebook /></a>
                    </div>
                    <div className = "col-md-1">
                        <a href = "//" ><SiInstagram/></a>
                    </div>
                    <div className = "col-md-1">
                        <a href = "//"><SiLinkedin /></a>
                    </div>
                </div>
           </div>
       </div>
        <div className = "footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
       

        </footer>


    )
}


export default Footer

