import Linktopage from '../../LinkToPage/Linktopage';

const Menulinks = () => {
    return(
        <ul>
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

export default Menulinks;