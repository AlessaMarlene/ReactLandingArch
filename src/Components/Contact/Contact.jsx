import Pagename from "../PageName/Pagename";
import Contactresume from "./ContactResume/Contactresume";
import Contactdetails from "./ContactDetails/Contactdetails";
import Connect from "./Connect/Connect";

const Contact = () => {
    return (
        <>
            <Pagename name='Contact'/>
            <main>
                <Contactresume/>
                <Contactdetails/>
                <Connect/>
            </main>
        </>
    );
}

export default Contact;