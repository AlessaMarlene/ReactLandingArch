import phone from '../../../assets/Contact/Desktop/image-hero.jpg';
import Contacttitle from './ContactTitle/Contacttitle';
import Contactsecondtitle from './ContactSecondTitle/Contactsecondtitle';
import Contactcontent from './ContactContent/Contactcontent';
import './Contactresume.css';

const Contactresume = () => {
    return (
        <section className="contactResume">
            <div className="contactResumeBackground">
                <div className="contactBackImage" style={{backgroundImage:`url(${phone})`}}></div>
                <div className="whiteSide">
                    <Contacttitle/>
                </div>
            </div>
            <div className="contactResumeContent">
                <p></p>
                <Contactsecondtitle/>
                <Contactcontent/>
            </div>
        </section>
    );
}

export default Contactresume;