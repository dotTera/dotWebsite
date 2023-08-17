import "./home-hero.scss"
import Navbar from "../nav-bar/NavBar.jsx"
import img from "./green.jpg"
import React from "react";

export default function HomeHero(){
    return(
        <>
            <Navbar/>
            <div className="home-hero">
                <div className="text-side">
                    <div className="big-text">
                        Good for the planet, Good for the wallet
                    </div>
                    <div className="sm-text">
                        Welcome to dotTerra, the platform that's transforming the way farmers manage and improve high-value operations to boost yields. Our impeccable AI technology empowers farmers with real-time information and personalized farming recommendations, optimizing crop yields, reducing input costs, and minimizing carbon footprints
                    </div>
                    <div className="explore">
                        <a href="#off"  style={{textDecoration: 'none',color:"#d8e9a8"}}>Explore Our Solution</a>

                    </div>

                </div>
                <div className="img-side">
                    <img src="https://venturebeat.com/wp-content/uploads/2022/05/GettyImages-1318237749.jpg?fit=2119%2C1414&strip=all" alt="Photo Missing" className="img "/>
                    <img src={img} alt="Photo Missing" className="img img2"/>
                </div>
                
            </div>

        </>
    )
}