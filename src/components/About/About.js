import React from 'react'
import './About.css'


function About() {
  return (
    <div className='about-page'>
      <h1 className = "about-title" >About Laura Blair</h1>
      <img 
            src="https://londonfashiongirl.com/wp-content/uploads/2020/04/PIC-800x766.png"
            width="200" 
            height="200" 
            alt="Hello" />
            
      <p></p>
      <p className = "abouts">I'm Laura and I'm a shoeaholic. 
        I have a serious addiction to all 
        things fabulous and need to share 
        that with you. This page is all 
        about sharing my passion for fashion with you so you can walk the runway right along with me! 
        Welcome to the fam! x</p>
      <p className='contact'>
        For all enquiries please contact <a href="mailto:info@londonfashiongirl.com">info@londonfashiongirl.com</a> or <a href="https://www.instagram.com/thelaurablair/">@TheLauraBlair</a>
      </p>
    </div>
  )
}

export default About