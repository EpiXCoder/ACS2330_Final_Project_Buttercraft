import React from 'react'
import './About.css'


function About() {
  return (
    <div className='about-page'>
      <h1 className = "about-title" >About Us</h1>
      <img className = "about-pic"
            src={`${process.env.PUBLIC_URL}/images/Vithusha.jpg`}
            width="200" 
            height="260" 
            alt="Hello" />
      <div className='about-text'>
      <p></p>
      <p className = "abouts">Welcome to Buttercraft Cakes, the enchanting realm where science, technology, and buttercream artistry unite! Founded by Vithu Rajan, a multi-talented baker with a diverse background in epidemiology and computer engineering, Buttercraft Cakes specializes in crafting exquisite celebration cakes for all occasions.</p>
      <p className = "abouts">With a keen eye for detail and a passion for baking, Vithu expertly combines precision and creativity to create buttercream masterpieces that captivate both the eyes and taste buds. While primarily focusing on buttercream cakes, Buttercraft Cakes also caters to special requests, skillfully extending to other cake mediums like fondant when the occasion calls for it.</p>
      <p className = "abouts">Join us in celebrating life's sweet moments with Buttercraft Cakes, where every indulgent slice is a testament to the magic of science, technology, and the art of baking.</p>
      <p className='contact'>
        For all enquiries please contact <a href="mailto:buttercraft.to@gmail.com">buttercraft.to@gmail.com</a> or <a href="https://www.instagram.com/buttercraftcakes.to/">@buttercraftcakes.to</a>
      </p>
      </div>      
    </div>
  )
}

export default About