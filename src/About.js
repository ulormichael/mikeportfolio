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
                      Hi, I’m Michael. I'm a multi-talented web developer with over 3 years of experiences in Web development. 
                      I'm also a freelance Graphics designer, i do Logo designs, Flyer designs, Business card designs, Banners and Posters designs.
                      I also design Professional resume (CV), setup LinkedIn profile optimization for customers.
                      </p>
                      <p className="about__text p__color">
                      My academic background, i hold a BSc degree in Industrial Chemistry from Adekunle Ajasin University but over
                      the years after graduating from college i dived into Web development to pursue my career as a Web developer. Aside from
                      my college degree i have also pursue my career in tech building my skills, taking up Professional courses to improve my knowledge.
                      </p>
                      <p className="about__text p__color">
                      I am open for job opportunities and below is my resume to know more about me.
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