import Bannertitle from "./BannerTitle/Bannertitle";
import Bannercontent from "./BannerContent/Bannercontent";
import Commonlink from "../../CommonLink/Commonlink";
import paramour from "../../../../assets/Home/Desktop/image-hero-paramour.jpg";

const Banner = () => {
    return(
        <div style={{backgroundImage:paramour}}>
            <Bannertitle/>
            <Bannercontent/>
            <Commonlink text="See Our Portfolio" pageName="/portfolio"/>
        </div>
    );
}

export default Banner;