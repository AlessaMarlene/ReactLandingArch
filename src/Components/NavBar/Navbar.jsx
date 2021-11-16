import { useEffect, useState } from 'react';
import Navbarlinks from './NavBarLinks/Navbarlinks';
import Logo from '../Logo/Logo';
import logoImage from '../../assets/logo/logo.svg';
import Burger from './BurgerMenu/Burger';
import './Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    const handleSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleSizeChange);
        return () => {
            window.removeEventListener('resize', handleSizeChange);
        }
    }, []);

    return (
        <nav className="navBar">
            <Logo logoImage={logoImage}/>
            <Burger handleClick={handleClick} showedMenu={showMenu}/>
            {(showMenu || width > 700) && <Navbarlinks/>}
        </nav>
    );
}

export default Navbar;