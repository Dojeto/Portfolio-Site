import React from "react"
import AnimatedCursor from "react-animated-cursor"
import Nav from "./components/Nav"
import Main from "./components/Hero"
import About from "./components/About"
import ContacMe from "./components/Contactme"

const App = ()=>{
    return (
    <>
        <AnimatedCursor
      innerSize={0}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Nav/>
    <Main/>
    <About/>
    <ContacMe/>
    </>
    )
}

export default App