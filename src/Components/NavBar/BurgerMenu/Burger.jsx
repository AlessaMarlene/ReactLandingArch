import burger from '../../../assets/icons/icon-hamburger.svg';
import './Burger.css';

const Burger = ({handleClick}) => {
    return (
        <div className="burger" onClick={() => handleClick()}>
            <img alt="burger" src={burger}/>
        </div>
    );
}

export default Burger;