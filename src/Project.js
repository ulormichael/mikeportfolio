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
            <p className="heading p__color">You are welcome to view my latest projects</p>
            <p className="heading p__color">Here are some of my latest projects</p>
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
                        <h5 className="project__text">Game Project</h5>
                        <h4 className="project__text">Calculator App</h4>
                        <a href="https://ulormichael.github.io/CalcProject/" target="_blank" className="project__btn">View Details</a>
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
                        <h5 className="project__text">Game Project</h5>
                        <h4 className="project__text">Rock, Paper, Scissors Game</h4>
                        <a href="https://ulormichael.github.io/RockPaperScissors/" target="_blank" className="project__btn">View Details</a>
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
                        <h5 className="project__text">Simple Website</h5>
                        <h4 className="project__text">HTML Website</h4>
                        <a href="https://ulormichael.github.io/html-css-website/" target="_blank" className="project__btn">View Details</a>
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
                        <h5 className="project__text">Classic Website</h5>
                        <h4 className="project__text">HTML/CSS Single Web page</h4>
                        <a href="https://ulormichael.github.io/css-website/" target="_blank" className="project__btn">View Details</a>
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
                        <h5 className="project__text">Game Project</h5>
                        <h4 className="project__text">Tic Tac Toe Game</h4>
                        <a href="https://ulormichael.github.io/TicTacToe_app/" target="_blank" className="project__btn">View Details</a>
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
                        <h5 className="project__text">Movie Library</h5>
                        <h4 className="project__text">Movie app</h4>
                        <a href="https://ulormichael.github.io/movie-app/" className="project__btn">View Details</a>
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