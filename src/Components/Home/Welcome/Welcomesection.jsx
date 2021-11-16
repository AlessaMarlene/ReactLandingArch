import Maintitle from "./MainTitle/Maintitle";
import Secondtitle from "./SecondTitle/Secondtitle";
import Welcomecontent from "./WelcomeContent/Welcomecontent";
import welcomeImage from "../../../assets/Home/Desktop/image-welcome-desktop.jpg";
import './Welcomesection.css';

const Welcome = () => {
    return(
        <section className="welcomeSection">
            <p></p>
            <div>
                <Maintitle/>
                <Secondtitle/>
                <Welcomecontent/>
            </div>
            <img alt="welcome" src={welcomeImage}/>
        </section>
    );
}

export default Welcome;