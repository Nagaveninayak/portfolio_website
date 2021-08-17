import React from 'react'

function About(){
    return(
        <div>
            <div className = "container-about">
                <img src = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/06/moodboard.jpg?auto=format&q=60&w=1840&h=1380&fit=crop&crop=faces" alt = "about" className = "rounded mx-auto d-block img-fluid" style = {{width: "100vw", height: "auto"}} />
                <h1 className = "image-text ">My Passion and Personality</h1>
            </div>

            <div className = "container-facts">
                <div className = "row">
                    <div className = "col-md-6">
                        <img src = "https://storage.googleapis.com/stateless-campfire-pictures/2019/09/fd4be50e-aesthetic-feels-posts-1568849498p4cl8.jpg" alt = "fun facrs" className = "rounded float-left" style = {{width: "30vw", height: "auto", padding: "20px", paddingLeft: "60px"}}/>
                    </div>
                    <div className = "col-md-5 break-style" style = {{padding: "20px", color: "grey"}}>
                        <h2 style = {{textAlign: "center"}}>Fun Facts about me !</h2>
                        <p className = "p-text1">I started html just for fun and it turned around my whole assumption of my goal.I love web design and dance, common thing between them is both are self-taught without a strict guidance. I learnt web design from many resources like udemy, purple, w3school and my brother. Well I learnt dance from only one resource which is youtube. Many new things I learnt during the time of lockdown due to covid</p>
                    </div>
                </div>
            </div>
            <h6>About page</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et aliquam elit. Nunc luctus purus convallis metus elementum, sit amet hendrerit mi aliquet. Phasellus tincidunt non turpis ac consectetur. Cras ultricies iaculis ante nec ullamcorper. Duis magna magna, pretium vitae imperdiet et, tempus vitae purus. Nam eget sapien eu augue faucibus aliquam. Integer tempus tortor nisl, aliquet fringilla nunc ullamcorper vestibulum. Donec lacinia nisi purus, vel imperdiet enim euismod quis. Mauris euismod facilisis ultrices. Aliquam finibus felis ligula, vitae ultricies justo ultrices in. Vestibulum suscipit semper sapien in interdum. Sed pellentesque nisl eget magna commodo, at semper turpis tincidunt. In vitae velit eget dolor sodales eleifend. Maecenas consequat in dui et suscipit.
            </p>
        </div>
    )
}

export default About

