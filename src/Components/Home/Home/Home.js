import React from "react";
import "./Home.css"
import img from '../../../Images/hamlegs.jpg'

const Home = () => {
    return (    
        <div className="home">
            <div className="home-content">
                <h1>Hello! I'm Kevin Wu</h1>
                <h3>CS Student | University of California, Irvine</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    {/* I am an aspiring full-stack developer focused on
                    creating unique products and smooth user experiences.
                    I am passionate about creating software that 
                    meaningfully changes the world around me.  */}
                </p>
                <div className="button-box">
                    <a href="https://www.linkedin.com/in/kevinwu098/" target="_blank">Hire Me</a>
                    <a href="mailto: kevinwu098@gmail.com" target="_blank">Let's Chat</a>
                </div>
            </div>

            <div className="home-links">
                <a href="https://www.linkedin.com/in/kevinwu098/" target="_blank" id="linkedin"><i class='bx bxl-linkedin'></i></a>
                <a href="https://github.com/kevinwu098" target="_blank" id="github"><i class='bx bxl-github'></i></a>
            </div>

            <div className="home-image-floating">
                    <img src={img}
                    id="ham-image" 
                    alt="hamlegs' profile picture"></img>
            </div>

        </div>
    )
}

export default Home;