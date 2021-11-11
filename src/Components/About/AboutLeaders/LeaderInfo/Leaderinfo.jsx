import linkedin from '../../../../assets/icons/icon-linkedin.svg';
import twitter from '../../../../assets/icons/icon-twitter.svg';
import Socialicon from './SocialIcon/Socialicon';

const Leaderinfo = ({leader}) => {
    const icons = [linkedin, twitter];

    return (
       <div>
           <img alt="leader" src={leader.image}/>
           <h3>{leader.name}</h3>
           <p>{leader.position}</p>
           <div>
                {icons.map((icon) => <Socialicon icon={icon}/>)}
           </div>
       </div>
    );
}

export default Leaderinfo;