import React from "react";
import "./Blog.css";
import Blog1 from './img/blog-01.jpg';
import Blog2 from './img/blog-02.jpg';
import Blog3 from './img/blog-03.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
        <div className="heading">
            <h1 className="heading">Social Links</h1>
            <p className="heading p__color">
                You can connect with me on the following Social media platforms.
            </p>
            <p className="heading p__color">
                Just click the links below.
            </p>
        </div>
        <div className="container">
            <div className="row">

                <div className="col__3">
                <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog2} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">Facebook</h5>
                            <h4 className="project__text">Find me on Facebook</h4>
                            <a href="https://www.facebook.com/ulorseriesdesigns" className="blog project__btn btn">Click Here</a>
                        </div>
                </div>
                </div>

                <div className="col__3">
                <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog3} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">Twitter</h5>
                            <h4 className="project__text">Find me on Twitter</h4>
                            <a href="https://www.twitter.com/ulorseries" className="blog project__btn btn">Click Here</a>
                        </div>
                </div>
                </div>

                <div className="col__3">
                <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog1} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">LinkedIn</h5>
                            <h4 className="project__text">Find me on LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/ulormichael" className="blog project__btn btn">Click Here</a>
                        </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Blog;