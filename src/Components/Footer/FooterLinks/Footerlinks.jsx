import Linktopage from '../../LinkToPage/Linktopage';
import './Footerlinks.css';

const Footerlinks = () => {
    return(
        <ul className="footerLinks">
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

export default Footerlinks;