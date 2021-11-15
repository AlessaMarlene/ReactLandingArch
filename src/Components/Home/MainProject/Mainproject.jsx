import Banner from "./Banner/Banner";
import NumbersGrid from "./NumbersGrid/Numbersgrid";
import "./Mainproject.css";

const Mainproject = () => {
    return (
        <section className="mainProjectSection">
            <Banner/>
            <NumbersGrid/>
        </section>
    );
}

export default Mainproject;