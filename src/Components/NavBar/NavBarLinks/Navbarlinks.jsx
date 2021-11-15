import Linktopage from '../../LinkToPage/Linktopage';
import './Navbarlinks.css';

const Navbarlinks = () => {
    return(
        <ul className="navLinks">
            <li>
                <Linktopage path='/portfolio' text='Portfolio'/>
            </li>
            <li>
                <Linktopage path='/about' text='About Us'/>
            </li>
            <li>
                <Linktopage path='/contact' text='Contact'/>
            </li>
        </ul>
    );
}

export default Navbarlinks;