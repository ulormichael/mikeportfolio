import React from 'react';
import './About.css';
import aboutImg from './img/about2.JPG';
import MyPDF from './img/Ulor-CV.pdf';

function About() {
  // Up To Top btn
  window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
    return (
      <div className="about component__space" id="About">
        <div className="container">
            <div className="row">
                <div className="col__2">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>
                <div className="col__2">
                    <h1 className="about__heading">About Me</h1>
                    <div className="about__meta">
                      <p className="about__text p__color">
                      Hi, I'm Ulor Michael, a Front End Developer with a strong IT background and a passion for creating dynamic, user-friendly web applications. 
                      With my experience i am driven by curiosity and a desire to build impactful digital solutions.
                      </p>
                      <p className="about__text p__color">
                      I hold a B.Sc degree in Industrial Chemistry from Adekunle Ajasin University and a Postgraduate degree in Chemical Engineering from the University of Lagos. 
                      My diverse academic background enhances my analytical and problem-solving skills in tech.
                      </p>
                      <p className="about__text p__color">
                        Adding to this, I am also proficient in HTML, CSS, JavaScript, React, Node.js and Python. I am also familiar with Git, GitHub, and other tools that help me to work efficiently. 
                      </p>
                      <p className="about__text p__color">
                        I am open for new job opportunities and below is my resume to know more about me. Thank you!
                      </p>
                      <div className="about__button d__flex align__items__center">
                        <a href={MyPDF} download="Ulor-CV.pdf"><button className="about btn pointer">Download CV</button></a>
                        <a href="#"><button className="about btn pointer">Hire Me</button></a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        {/* UP TO TOP BTM */}
        <div className="up__to__top__btn">

        </div>
      </div>
    );
}

export default About;