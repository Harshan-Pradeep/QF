import React, { useContext, useEffect } from "react";
import "./aboutus.scss";
import about1 from "../../../assets/img/about/about1.jpg";
import about2 from "../../../assets/img/about/about2.jpg";
import about3 from "../../../assets/img/about/about3.jpg";
import Footer from "../../../layouts/Footer";
import figure1 from '../../../assets/img/developers/figure1.jpeg'
import figure2 from "../../../assets/img/developers/figure2.jpeg"
import figure3 from "../../../assets/img/developers/figure3.jpeg"
import { ChangeHeaderNavColorContext } from "../../../helper/Context";

function AboutUs() {
  const { changeHeaderNavColor, setChangeHeaderNavColor } = useContext(
    ChangeHeaderNavColorContext
  );
  useEffect(() => {
    setChangeHeaderNavColor(true);
  }, []);
  return (
    <div className="AboutUs">
      <div className="aboutus-wrapper">
        <div className="title">
          About <span>Us</span>
        </div>
        <div className="about-us">
          <div className="row">
            <img src={about1} alt="" />
            <p>
              Queens Furniture is a Furnitures-selling platform connecting customers with people who wish to buy top-notch furnituires.
              Whether you want furnitures for home or business place thrugh queens furnitures we hope to provide good related furnitures for you, this platform offers an efficient solution
              for all your furnitures needs. This platform is built on the
              principles of convenience, reliability, and affordability,
              ensuring that our clients receive the best possible experience.
            </p>
          </div>
          <div className="row">
            <p>
              At Queens Furnituires Now, we understand the importance of standing out in a
              competitive market. That's why this web Application is designed with a unique
              with modern web technologies.
            </p>
            <img src={about2} alt="" />
          </div>
          <div className="row">
            <img src={about3} alt="" />
            <p>
              Our mission is to provide a platform that connects customers with
              the Queens Furniture in their respective needs, ensuring that
              furnitures are highest standards within budget and
              on time. With Queens Furniture, Customers can rest assured that they will
              receive top-notch furnitures from the most qualified Furniture store
              in the industry.
            </p>
          </div>
          {/* <div className="title">
            Our <span>Logo Design</span>
          </div>
          <div className="our-logo">
            <div className="logo-line">
              <img src={about4} alt="" />
              <img src={about5} alt="" />
              <img src={about6} alt="" />
            </div>
            <div className="logo-line">
              <img src={about7} alt="" />
              <img src={about8} alt="" />
            </div>
          </div> */}
          <div className="team" id="team">
            <div className="title">
              Our <span>Team</span>
            </div>
            <div className="sub-text">
              Queens Furniture team comprises of experienced and highly skilled
              professionals committed to delivering exceptional results.
            </div>
            <div className="team-members-list">
              <div className="member">
                <img className="proPic" src={figure1} alt="" />
                <div className="name">J.H.P.Y.K.Jayathilake</div>
                {/* <div className="age">23 Years</div> */}
                <div className="role">UWU/IIT/19/038</div>
              </div>
              <div className="member">
                <img className="proPic" src={figure2} alt="" />
                <div className="name">P.G.A.M.Gallage</div>
                {/* <div className="age">24 Years</div> */}
                <div className="role">UWU/IIT/19/024</div>
              </div>
              <div className="member">
                <img className="proPic" src={figure3} alt="" />
                <div className="name">R.M.D.S.Bandaranayaka</div>
                {/* <div className="age">24 Years</div> */}
                <div className="role">UWU/IIT/19/056</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
