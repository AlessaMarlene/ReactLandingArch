import logoImage from '../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <img alt="logo" src={logoImage}/>
        </Link>
    );
}

export default Logo;