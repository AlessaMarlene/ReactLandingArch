import Pagename from "../PageName/Pagename";
import Aboutresume from "./AboutResume/Aboutresume";
import Heritage from "./Heritage/Heritage";
import Aboutleaders from "./AboutLeaders/Aboutleaders";

const Aboutus = () => {
    return (
        <>
            <Pagename name='About Us'/>
            <main>
                <Aboutresume/>
                <Heritage/>
                <Aboutleaders/>
            </main>
        </>
    );
}

export default Aboutus;