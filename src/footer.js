import { AiOutlineCopyright } from "react-icons/ai";
import { social } from "./data";
import Logo from "./Logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        {social.map((item) => {
          const { id, icon, url } = item;
          return (
            <a target="_blank" key={id} href={url}>
              {icon}
            </a>
          );
        })}
      </div>
      <div className="footer-logo">
        <img width="100px" src={Logo} alt="" />
      </div>
      <div className="copyright">
        <p>
          <i>
            <AiOutlineCopyright />
            Copyright Super Cafe.
          </i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
