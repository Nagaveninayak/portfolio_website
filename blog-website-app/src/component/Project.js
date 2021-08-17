import React from 'react'
import Typed from 'react-typed'
import pdf from '../images/ack.pdf'
import car from '../images/car.jpg'
import qiskit from '../images/qiskit.png'
import vlsi from '../images/vlsi.jpg'

function Project(){
    const downloadFile = () => {
        window.location.href = pdf
    }
    return(
        <div>
            <div className = "container-project">
                <img src = "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29yayUyMGRlc2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" style = {{width: "100vw", height: "auto", paddingTop: "20px"}} />
                <h1 className = "image-text-project">
                    <span>Projects Outlook</span><br/><br/>
                    <Typed
                        strings= {["Full Stack", "Electronics", "Quantum Circuits"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop />
                </h1>
            </div>
            <div style = {{marginTop: "20px"}}>
                <h2 style = {{textAlign: "center"}}>Projects Lists</h2>
                <div className = "row">
                    <div className = "col-md-3 border border-5" style = {{margin: "30px", hover: "yellow"}}>
                        <div className = "bg-image hover-zoom">
                        <img src = {car} alt = "bluetooth car" style = {{width: "80vw", heigth: "auto", marginTop: "10px"}} className ="img-thumbnail bg-image hover-zoom"></img>
                        </div>
                        <h2 style = {{textAlign: "center"}}>Ardino car</h2>
                                <p>Blutooth controlled ardunio car was a fun project prepared during my fifth semester for the technical function. The car was encoded using Arduino and the direction and movement of the car was monitored using the bluetooth connected mobile devices. The project was easy but main problem was faced due to the power suppply.</p>
                    </div>
                    <div className = "col-md-3  border border-5" style = {{margin: "30px"}}>
                        <img src = {qiskit} alt = "qiskit" className ="img-thumbnail" style = {{width: "80vw", heigth: "auto", marginTop: "20px"}}></img>
                        <h2 style = {{textAlign: "center"}}>Quantum Circuits</h2>
                                <p>Quantum circuit using qiskit is a main project in which an arthmetic and logic unit was designed using reversible gates. The main aim of the project was to design the circuit and code the circuit to perform in a real time quantum computer. The designed circuit was coded in jupyter lab using python and the result were applied to IBM simulators to check how the circuits would work in a real time quantum computers</p>
                    </div>
                    <div className = "col-md-3 border border-5" style = {{margin: "30px"}}>
                        <img src = {vlsi} alt = "vlsi project" className ="img-thumbnail" style = {{marginTop: "20px"}}></img>
                        <h2 style = {{textAlign: "center"}}>Reversible circuits</h2>
                                <p>Reversible circuits in vlsi and QCA was a precedor of the aim of the quantum circuits. The main was to develop an arthmetic and logic unit ALU using a traditional ways and comparing a thus obtained design with the nano meter design. Here nano meter circuits were developed using open source software like Quantum cellular automata and micro meter circuits werer developed using cadenece and xilinx. Outcome was to show the depth in which the transistor size can be reduced.</p>
                    </div>
                </div>
            </div>
            
            
            <h2 style = {{textAlign: "center"}}>Academics projects</h2>
            <div id="carouselExampleDark" className="carousel  slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <h1 className = "header-project1">Ticket Master</h1>
                    <div className = "carousel-caption d-md-block">
                        <p className = "p-text1">
                            Ticket master is an web projects which included tickets issue to the customers and employees. Ticket master backend was developed using nodejs, express and mongoose.
                            Frontend was designed using react, redux and bootstrap for styling.<br/>
                            More Information about ticket master<br/>
                            <a href = "#">Click here!</a>
                        </p>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <h1 className = "header-project2">Notes App</h1>
                    <div className = "carousel-caption d-md-block">
                        <p className = "p-text1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Suspendisse et aliquam elit. Nunc luctus purus convallis metus elementum, sit amet hendrerit mi aliquet. Phasellus tincidunt non turpis ac consectetur. Cras ultricies iaculis ante nec ullamcorper. Duis magna magna, pretium vitae imperdiet et, tempus vitae purus. Nam eget sapien eu augue faucibus aliquam.<br/>
                            More Information about Notes App<br/>
                            <a href = "#">Click here!</a>
                        </p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <h1 className = "header-project3">Blog Project</h1>
                    <div className="carousel-caption d-md-block">
                        <p className = "p-text1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et aliquam elit. Nunc luctus purus convallis metus elementum, sit amet hendrerit mi aliquet. Phasellus tincidunt non turpis ac consectetur. Cras ultricies iaculis ante nec ullamcorper. Duis magna magna, pretium vitae imperdiet et, tempus vitae purus. Nam eget sapien eu augue faucibus aliquam.<br/>
                            More Information about Blog project<br/>
                            <a href = "#">Click here!</a> 
                            </p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>

                {/* Resume  */}
                <div className = "resume-style" >
                    <Typed
                        className = "p-text1"
                        strings= {["View and download my resume here"]}
                        typeSpeed={100}
                        backSpeed={120}
                        loop />
                <p className = "p-text1" >download resume here</p>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className ="btn btn-primary" type="button" onClick = {downloadFile}>Resume</button>
                </div>
                </div>
        </div>
    )
}

export default Project


