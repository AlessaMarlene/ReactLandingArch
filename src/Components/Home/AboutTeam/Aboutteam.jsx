import Smallteamtitle from './SmallTeamTitle/Smallteamtitle';
import Commonlink from '../CommonLink/Commonlink';
import './Aboutteam.css';

const Aboutteam = () => {
    return (
        <div className="aboutTeam">
            <Smallteamtitle/>
            <Commonlink text="About Us" pageName="/about"/>
        </div>
    );
}

export default Aboutteam;