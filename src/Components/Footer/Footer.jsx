import Logo from "../Logo/Logo";
import Footerlinks from "./FooterLinks/Footerlinks";
import Commonlink from "../Home/CommonLink/Commonlink";
import logoImage from "../../assets/logo/logo-white.svg";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <Logo logoImage={logoImage}/>
            </div>
            <div>
                <Footerlinks/>
                <Commonlink text="See Our Portfolio" pageName="/portfolio"/>
            </div>
        </footer>
    );
}

export default Footer;