// import React, { useEffect } from 'react';
// import './About.css';
// import aboutImg from './img/about2.JPG';
// import MyPDF from './img/Ulor-CV.pdf';

// function About() {
//   useEffect(() => {
//     const upToTop = document.querySelector("a.bottom__to__top");
//     if (!upToTop) return;

//     const handleScroll = () => {
//       upToTop.classList.toggle("active", window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="about component__space" id="About">
//       <div className="container">
//         <div className="row">
//           <div className="col__2">
//             <img src={aboutImg} alt="" className="about__img" />
//           </div>
//           <div className="col__2">
//             <h1 className="about__heading">About Me</h1>
//             <div className="about__meta">
//               {/* ...paragraphs unchanged... */}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="up__to__top__btn">
//         <a href="#About" className="bottom__to__top">↑</a>
//       </div>
//     </div>
//   );
// }

// export default About;









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
                      Hi, I’m Ulor Michael, a Front-End Web Developer with a strong technical background and a passion for creating dynamic, responsive, and user-friendly digital experiences. 
                      I enjoy transforming ideas and concepts into functional web applications that are not only visually appealing but also intuitive, accessible, and effective for users.
                      </p>
                      <p className="about__text p__color">
                     With my experience in web development, I am driven by curiosity, continuous learning, and a desire to solve real-world problems through technology. I enjoy working on projects that challenge me 
                     to think creatively, improve my technical skills, and understand how technology can be used to create meaningful business and user outcomes. 
                      </p>
                      <p className="about__text p__color">
                       I hold a B.Sc. degree in Industrial Chemistry from Adekunle Ajasin University and a Postgraduate degree in Chemical Engineering from the University of Lagos. Although my academic background
                        is rooted in science and engineering, it has given me a strong foundation in analytical thinking, research, critical reasoning, problem-solving, and attention to detail. I have been able to 
                        transfer these skills into my career in technology and software development.
                      </p>
                      <p className="about__text p__color">
                       From a technical perspective, I am proficient in HTML, CSS, JavaScript, React, Node.js, and Version Control - GitHub. I have experience building responsive web interfaces, developing reusable components, 
                       integrating APIs, working with backend services, and connecting applications to databases. I am also familiar with modern development practices and tools that support efficient 
                       software development and collaboration.
                      </p>
                      {/* <p className="about__text p__color">
                       In addition, I have experience working with Git and GitHub for version control and collaborative development, as well as deployment and hosting platforms such as Netlify and Vercel. 
                       I am also familiar with tools such as Postman, MongoDB, Express.js, Mongoose, Tailwind CSS, and Vite, which have helped me become more comfortable working across different stages 
                       of the development lifecycle.
                      </p> */}
                      <p className="about__text p__color">
                        I am continuously improving my skills and keeping up with emerging technologies, particularly in Artificial Intelligence, SaaS products, automation, and modern web development. 
                        My goal is to continue growing as a technology professional while contributing to teams that are building innovative and impactful digital products.
                      </p>
                      {/* <div className="about__button d__flex align__items__center">
                        <a href={MyPDF} download="Ulor-CV.pdf"><button className="about btn pointer">Download CV</button></a>
                        <a href="#"><button className="about btn pointer">Hire Me</button></a>
                      </div> */}
                    </div>
                </div>
            </div>
        </div>
        {/* UP TO TOP BTM */}
       <div className="up__to__top__btn">
        <a href="#About" className="bottom__to__top">↑</a>
      </div>
      </div>
    );
}

export default About;