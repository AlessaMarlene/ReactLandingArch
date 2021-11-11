import phone from '../../../assets/Contact/Desktop/image-hero.jpg';
import Contacttitle from './ContactTitle/Contacttitle';
import Contactsecondtitle from './ContactSecondTitle/Contactsecondtitle';
import Contactcontent from './ContactContent/Contactcontent';

const Contactresume = () => {
    return (
        <section style={{backgroundImage:phone}}>
            <div>
                <Contacttitle/>
                <p></p>
                <Contactsecondtitle/>
                <Contactcontent/>
            </div>
        </section>
    );
}

export default Contactresume;