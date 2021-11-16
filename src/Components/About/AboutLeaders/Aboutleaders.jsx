import Leaderstitle from "./LeadersTitle/Leaderstitle";
import leaders from "../../../data/leaders";
import Leaderinfo from './LeaderInfo/Leaderinfo';
import './Aboutleaders.css';

const Aboutleaders = () => {
    return (
       <section className="aboutLeaders">
           <Leaderstitle/>
           <div className="leadersList">
                {leaders.map((leader) => <Leaderinfo key={leader.name} leader={leader}/>)}
           </div>
       </section>
    );
}

export default Aboutleaders;