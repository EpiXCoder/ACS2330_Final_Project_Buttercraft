import React from 'react'
import './About.css'


function About() {
  return (
    <div className='about-page' role="main" aria-label="About the baker">
      <h1 className="about-title">About the baker</h1>
      <img
        className="about-pic"
        src={`${process.env.PUBLIC_URL}/images/Vithusha.jpg`}
        width="200"
        height="260"
        alt="The baker"
      />
      <div className='about-text'>
        <p></p>
        <p className="abouts">Welcome to Buttercraft Cakes, the enchanting realm where science, technology, and buttercream artistry unite! Founded by Vithu Rajan, a multi-talented baker with a diverse background in epidemiology and computer engineering, Buttercraft Cakes specializes in crafting exquisite celebration cakes for all occasions.</p>
        <p className="abouts">With a keen eye for detail and a passion for baking, Vithu expertly combines precision and creativity to create buttercream masterpieces that captivate both the eyes and taste buds. While primarily focusing on buttercream cakes, Buttercraft Cakes also caters to special requests, skillfully extending to other cake mediums like fondant when the occasion calls for it.</p>
        <p className="abouts">Join us in celebrating life's sweet moments with Buttercraft Cakes, where every indulgent slice is a testament to the magic of science, technology, and the art of baking.</p>
      </div>
    </div>
  )
}

export default About