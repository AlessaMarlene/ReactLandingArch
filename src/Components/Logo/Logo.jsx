import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({logoImage}) => {
    return (
        <Link to='/'>
            <img className="logo" alt="logo" src={logoImage}/>
        </Link>
    );
}

export default Logo;