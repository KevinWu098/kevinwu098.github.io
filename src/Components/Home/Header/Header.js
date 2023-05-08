import React from "react";
import "./Header.css"

const Header = () => {
    return (    
            <header className="header">
                <a href="#" className="logo">Kevin.dev</a>
                <nav className="navbar">
                    <a href="#" className="active">Home</a>
                    <a href="#">About</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
    )
}

export default Header;