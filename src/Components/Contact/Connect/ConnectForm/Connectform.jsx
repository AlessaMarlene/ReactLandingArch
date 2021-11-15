import whiteArrow from '../../../../assets/icons/white_arrow.svg';
import './Connectform.css';

const Connectform = () => {
    return (
        <form className="connectForm">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <textarea type="text" placeholder="Message"/>
            <button><img alt="arrow" src={whiteArrow}/></button>
        </form>
    );
}

export default Connectform;