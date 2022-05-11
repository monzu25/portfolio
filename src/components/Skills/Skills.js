import React from 'react';

const Skills = () => {
    return (
    <div id="about" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>

          <div className="commonBorder"></div>
        </div>
        <div className="row  alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img width="500px" src="/images/me.jpg" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I am Full stack Web developer, I have good skill on React js, Javascript, Node js, Express js,  Mongodb, ASP.NET framework
              </div>
              <div className="about__info-p2">
                I am very determined and confident to work with these referred technology
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <a href="MD MONZU(Resume).pdf" download="MD MONZU(Resume).pdf" className="btn btn-outline">
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Skills;