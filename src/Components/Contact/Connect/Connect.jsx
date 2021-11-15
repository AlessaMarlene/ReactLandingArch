import Connecttitle from "./ConnectTitle/Connecttitle";
import Connectform from "./ConnectForm/Connectform";
import "./Connect.css";

const Connect = () => {
    return (
        <section className="connect">
            <Connecttitle/>
            <Connectform/>
        </section>
    );
}

export default Connect;