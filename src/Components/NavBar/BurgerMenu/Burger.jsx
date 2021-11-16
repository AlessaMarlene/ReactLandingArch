import burger from '../../../assets/icons/icon-hamburger.svg';
import close from '../../../assets/icons/icon-close.svg';
import './Burger.css';

const Burger = ({handleClick, showedMenu}) => {
    let image = showedMenu ? close : burger;

    return (
        <div className="burger" onClick={() => handleClick()}>
            <img alt="burger" src={image}/>
        </div>
    );
}

export default Burger;