import hero from '../../../assets/About/Desktop/image-hero.jpg';
import Abouttitle from './AboutTitle/Abouttitle';
import Aboutsecondtitle from './AboutSecondTitle/Aboutsecondtitle';
import Resumecontent from './ResumeContent/Resumecontent';

const Aboutresume = () => {
    return (
       <section style={{backgroundImage:hero}}>
           <div>
               <Abouttitle/>
               <p></p>
               <Aboutsecondtitle/>
               <Resumecontent/>
           </div>
       </section>
    );
}

export default Aboutresume;