import { Link } from 'react-router-dom';

const Linktopage = ({path, text}) => {
    return(
        <Link to={path}>
            <p>{text}</p>
        </Link>
    );
}

export default Linktopage;