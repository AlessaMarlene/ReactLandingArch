import { useEffect, useState } from 'react';
import Navbarlinks from './NavBarLinks/Navbarlinks';
import Logo from '../Logo/Logo';
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
    }, []);

    return (
        <nav>
            <Logo/>
            <Burger handleClick={handleClick}/>
            {(showMenu || width > 700) && <Navbarlinks/>}
        </nav>
    );
}

export default Navbar;