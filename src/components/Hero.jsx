import React from "react";
import Spline  from "@splinetool/react-spline";
// import logo from "../assets/Dojeto.jpg"
import Typewriter from "typewriter-effect";

const Main = ()=>{
      
    return(
        <div className="wrapper">
            <div className="container-left">
                <h1>HEY THERE I'M OM LIMDIWALA ~</h1>
                <div className="typeanim">
            
            <h4>As a</h4><Typewriter
                options={{
                  strings: ['Web Developer', 'Weeb', 'Game Developer'],
                  autoStart: true,
                  loop: true,
                }}

                onInit={(typewriter)=> {
                
                typewriter
                .pauseFor(1000)
                .deleteAll()
                .typeString()
                .start();
                }}
                />
                </div>
            </div>
            <div className="container-right">
            <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
            </div>
        </div>
    )
}

export default Main