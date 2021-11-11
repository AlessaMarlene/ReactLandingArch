import contacts from "../../../data/contacts";
import Detailstitle from "./DetailsTitle/Detailstitle";
import Officeinfo from "./OfficeInfo/Officeinfo";
import map from "../../../assets/Contact/Desktop/image-map.png";

const Contactdetails = () => {
    return (
        <section>
            <div>
                <div>
                    <p></p>
                    <Detailstitle/>
                </div>
                <div>
                    {contacts.map((contact) => <Officeinfo office={contact}/>)}
                </div>
            </div>
            <img alt="map" src={map}/>
        </section>
    );
}

export default Contactdetails;