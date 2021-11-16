import Abouttitle from './AboutTitle/Abouttitle';
import Aboutsecondtitle from './AboutSecondTitle/Aboutsecondtitle';
import Resumecontent from './ResumeContent/Resumecontent';
import './Aboutresume.css';

const Aboutresume = () => {
    return (
        <section className="aboutResume">
            <div className="aboutResumeBackground" >
                <div className="aboutBackImage"></div>
                <div className="whiteSide">
                    <Abouttitle/>
                </div>
            </div>
            <div className="aboutResumeContent">
                    <p></p>
                    <Aboutsecondtitle/>
                    <Resumecontent/>
            </div>
        </section>
    );
}

export default Aboutresume;