import React from "react";
import Typewriter from 'typewriter-effect';
import Particle from "react-particles-js";
import particlesConfig from '../assets/particlesConfig.json'

import 'animate.css';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import './Banner.css'
import ScrollAnimation from "react-animate-on-scroll";





const Banner = () => {

  const [state] = React.useState({
    title: "I am MONZU",
    text: "I have DEXTERITY On​",
    image: "/images/man-01.png",
  });

  return (
    <header id="header" className="header">
      <div className="container">
        <Particle params={particlesConfig} className="App-particles__container" />
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1 className="animate__animated animate__fadeInLeft">  {state.title}</h1>
                <p>{state.text}
                  <Typewriter
                    options={{
                      strings: [
                        `Full Stack Web devloper`,
                        `MERN Stack Developer`,
                        `Shopify Store Builder`,
                        `Wordpress Customization`,
                        `Graphics Design`],
                      skipAddStyles: false,
                      autoStart: true,
                      size: "20px",
                      loop: true,

                    }}
                  />
                </p>
                <div className="header__buttons">
                  <a href="#contact" className="btn btn-outline">
                    Contact ME
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="MD MONZU(Resume).pdf" target="_blank" className="btn btn-outline">
                    Get Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 profileImage">
            <div className="banner__img">
              <img className="animate__animated animate__fadeInRight" src={state.image} alt="man" />
            </div>
          </div>
        </div>
        </div>
     
    </header>
  );
};

export default Banner;
