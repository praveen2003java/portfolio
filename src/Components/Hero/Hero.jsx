import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Praveen,</span> full stack developer based in INDIA</h1>
        <p>I'm a full stack developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I'm always eager to learn new technologies and improve my skills.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='a-link' href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href='https://drive.google.com/file/d/1G9hYgMXMD88J_5P2JFklVwcsCq0Nk5Df/view?usp=sharing'> My resume </a> </div>
      </div>
    </div>
  )
}

export default Hero
