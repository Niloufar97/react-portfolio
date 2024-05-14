import "./footer.css";
import linkedinImg from "../../assets/images/social-media/linkedin.svg";
import instagramImg from "../../assets/images/social-media/instagram.svg";
import facebookImg from "../../assets/images/social-media/facebook.svg";
import {  Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer-container">
      <Row className="footer-row ">
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
      </Row>
    </div>
  );
}

export default Footer;
