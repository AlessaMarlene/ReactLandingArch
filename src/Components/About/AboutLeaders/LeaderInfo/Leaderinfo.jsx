import linkedin from '../../../../assets/icons/icon-linkedin.svg';
import twitter from '../../../../assets/icons/icon-twitter.svg';
import Socialicon from './SocialIcon/Socialicon';
import './Leaderinfo.css';

const Leaderinfo = ({leader}) => {
    const icons = [linkedin, twitter];

    return (
       <div className="leaderInfo">
           <img alt="leader" src={leader.image}/>
           <h3>{leader.name}</h3>
           <p>{leader.position}</p>
           <div className="socialIcons">
                {icons.map((icon) => <Socialicon key={icon} icon={icon}/>)}
           </div>
       </div>
    );
}

export default Leaderinfo;