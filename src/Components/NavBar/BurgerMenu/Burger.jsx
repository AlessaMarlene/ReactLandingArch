import burger from '../../../assets/icons/icon-hamburger.svg';

const Burger = ({handleClick}) => {
    return (
        <div onClick={() => handleClick()}>
            <img alt="burger" src={burger}/>
        </div>
    );
}

export default Burger;