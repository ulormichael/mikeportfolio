import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-5.JPG';
import Project2 from './img/portfolio-5.JPG';
import Project3 from './img/portfolio-5.JPG';
import Project4 from './img/portfolio-5.JPG';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
       <div className="heading">
            <h1 className="heading">My Latest Project</h1>
            <p className="heading p__color">There are many variations of passages of Lorem Iosum</p>
            <p className="heading p__color">There are many variations of passages</p>
        </div>
        <div className="container">
            <div className="row">

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project1} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Web Development</h5>
                        <h4 className="project__text">Project yet to be uploaded</h4>
                        <a href="https://aneagoie.github.io/robofriends/" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project2} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Web Development</h5>
                        <h4 className="project__text">Project yet to be uploaded</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project3} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Web Development</h5>
                        <h4 className="project__text">Project yet to be uploaded</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project4} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Web Development</h5>
                        <h4 className="project__text">Project yet to be uploaded</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project3} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Web Development</h5>
                        <h4 className="project__text">Project yet to be uploaded</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Project4} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text">Web Development</h5>
                        <h4 className="project__text">Project yet to be uploaded</h4>
                        <a href="#" className="project__btn">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <button className="view__more pointer btn">View more</button>
                </div>


            </div>
        </div>
    </div>
  );
}

export default Project;