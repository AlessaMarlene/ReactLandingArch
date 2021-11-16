import Bannertitle from "./BannerTitle/Bannertitle";
import Bannercontent from "./BannerContent/Bannercontent";
import Commonlink from "../../CommonLink/Commonlink";
import './Banner.css';

const Banner = () => {
    return(
        <div className="banner">
            <Bannertitle/>
            <Bannercontent/>
            <Commonlink text="See Our Portfolio" pageName="/portfolio"/>
        </div>
    );
}

export default Banner;