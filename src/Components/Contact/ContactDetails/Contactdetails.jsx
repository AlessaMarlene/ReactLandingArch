import contacts from "../../../data/contacts";
import Detailstitle from "./DetailsTitle/Detailstitle";
import Officeinfo from "./OfficeInfo/Officeinfo";
import "./Contactdetails.css";

const Contactdetails = () => {
    return (
        <section className="contactDetails">
            <div className="offices">
                <div>
                    <p></p>
                    <Detailstitle/>
                </div>
                <div>
                    {contacts.map((contact) => <Officeinfo key={contact.name} office={contact}/>)}
                </div>
            </div>
            <div className="map"></div>
        </section>
    );
}

export default Contactdetails;