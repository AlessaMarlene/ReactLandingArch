import { Link } from 'react-router-dom';
import './Linktopage.css';

const Linktopage = ({path, text}) => {
    return(
        <Link to={path}>
            <h4 className="linkText">{text}</h4>
        </Link>
    );
}

export default Linktopage;