import {Link} from "react-router-dom";
import whiteArrow from "../../../assets/icons/white_arrow.svg";
import './Commonlink.css';

const Commonlink = ({text, pageName}) => {
    return(
        <Link className="button" to={pageName}>
            <h4>{text}</h4>
            <img alt="arrow" src={whiteArrow}/>
        </Link>
    );
}

export default Commonlink;