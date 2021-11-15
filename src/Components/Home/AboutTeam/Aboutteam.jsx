import Smallteamtitle from './SmallTeamTitle/Smallteamtitle';
import Commonlink from '../CommonLink/Commonlink';
import smallTeam from '../../../assets/Home/Desktop/image-small-team.jpg';
import './Aboutteam.css';

const Aboutteam = () => {
    return (
        <div className="aboutTeam" style={{backgroundImage:`url(${smallTeam})`}}>
            <Smallteamtitle/>
            <Commonlink text="About Us" pageName="/about"/>
        </div>
    );
}

export default Aboutteam;