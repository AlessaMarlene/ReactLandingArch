import Smallteamtitle from './SmallTeamTitle/Smallteamtitle';
import Commonlink from '../CommonLink/Commonlink';
import smallTeam from '../../../assets/Home/Desktop/image-small-team.jpg';

const Aboutteam = () => {
    return (
        <div style={{backgroundImage:smallTeam}}>
            <div>
                <Smallteamtitle/>
                <Commonlink text="About Us" pageName="/about"/>
            </div>
        </div>
    );
}

export default Aboutteam;