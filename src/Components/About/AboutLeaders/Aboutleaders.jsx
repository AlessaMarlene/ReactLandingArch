import Leaderstitle from "./LeadersTitle/Leaderstitle";
import leaders from "../../../data/leaders";
import Leaderinfo from './LeaderInfo/Leaderinfo';

const Aboutleaders = () => {
    return (
       <section>
           <Leaderstitle/>
           <div>
                {leaders.map((leader) => <Leaderinfo leader={leader}/>)}
           </div>
       </section>
    );
}

export default Aboutleaders;