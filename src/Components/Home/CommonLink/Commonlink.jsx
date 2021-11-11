import {Link} from "react-router-dom";
import whiteArrow from "../../../assets/icons/white_arrow.png";

const Commonlink = ({text, pageName}) => {
    return(
        <Link to={pageName}>
            <p>{text}</p>
            <img alt="arrow" src={whiteArrow}/>
        </Link>
    );
}

export default Commonlink;