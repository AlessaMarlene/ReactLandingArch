import Maintitle from "./MainTitle/Maintitle";
import Secondtitle from "./SecondTitle/Secondtitle";
import Welcomecontent from "./WelcomeContent/Welcomecontent";
import welcomeImage from "../../../assets/Home/Desktop/image-welcome.jpg";

const Welcome = () => {
    return(
        <section>
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