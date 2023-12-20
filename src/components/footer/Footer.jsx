import "./footer.css";
import linkedinImg from "../../assets/images/social-media/linkedin.svg";
import instagramImg from "../../assets/images/social-media/instagram.svg";
import facebookImg from "../../assets/images/social-media/facebook.svg";
import homeImg from '../../assets/images/social-media/house-fill.svg'
import phoneImg from '../../assets/images/social-media/telephone-fill.svg'
import gmailImg from '../../assets/images/social-media/gmail.svg'
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer-container">
      <Row>
        <Col md={6}>
        <h4>Contact Me:</h4>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/niloufar-khaefi/"
            target="_blanck"
          >
            <img src={linkedinImg}></img><span>Niloufar Khaefi</span>
          </a>
          <a href="https://www.instagram.com/niloufar__76/" target="_blanck">
            <img src={instagramImg}></img><span>niloufar__76</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100081011214665"
            target="_blanck"
          >
            <img src={facebookImg}></img><span>Niloufar Khaefi</span>
          </a>
        </div>
        </Col>
        <Col md={6}>
            <div className="address">
              <img src={homeImg}></img>
              <p>Aarhus, skejbyparken</p>
            </div>
            <div className="phone">
              <img src={phoneImg}></img>
              <p>+45 61 76 55 96</p>
            </div>
            <div className="eamil">
              <img src={gmailImg}></img>
              <p>nilooooofar97@gmail.com</p>
            </div>

        </Col>
      </Row>
    </div>
  );
}

export default Footer;
