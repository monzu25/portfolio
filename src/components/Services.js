import React from "react";
import 'animate.css';
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
  FaWordpress,
  FaShopify,
  FaGraphics,
  FaBars,
  FaAdobe,
  FaDatabase,
  FaChartBar,

} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "My Dexterity",
    subHeading: "My Dexterity",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Full Stack Web Development",
      text:"I feel comfortable to work with trending technology. I want to become your web solver.",
    },
    {
      id: 2,
      icon: <FaGithub className="commonIcons" />,
      heading: "MERN Full Stack Development",
      text:"MERN stack is so popular. I am able to work with this technology. You can hire me",
    },
    {
      id: 3,
      icon: <FaWordpress className="commonIcons" />,
      heading: "Wordpress Customizing",
      text:"I have basic knowledge of working with WordPress customization ",
    },
    {
      id: 4,
      icon: <FaShopify className="commonIcons" />,
      heading: "Shopify Store Building",
      text:"I have Shopify store customization experience. And I customized a couple of stores with the Shopify partner platform.",
    },
    {
      id: 5,
      icon: <FaAdobe className="commonIcons" />,
      heading: "Graphics design",
      text:
        "Finally, I have Intermediate level knowledge of Canva pro design.",
    },
    {
      id: 6,
      icon: <FaChartBar className="commonIcons" />,
      heading: "Data Analysis",
      text:
        "I am certified by Google. I have completed the 'The Google Data Analytics certificate course with Coursera'",
    },
  ]);
  return (
    <div id="skills" className="skills animate__animated animate__fadeInRight ">
      <div className="container my-5">
        <div className="services__header">
          <div className="common">
            <h1 className="heading">{header.mainHeader}</h1>
            {/* <h1 className="mainHeader">{header.subHeading}</h1> */}
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box text-center">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
