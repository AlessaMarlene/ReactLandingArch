import Logo from "../Logo/Logo";
import Footerlinks from "./FooterLinks/Footerlinks";
import Commonlink from "../Home/CommonLink/Commonlink";

const Footer = () => {
    return (
        <footer>
            <Logo/>
            <div>
                <Footerlinks/>
                <Commonlink text="See Our Portfolio" pageName="/portfolio"/>
            </div>
        </footer>
    );
}

export default Footer;