import whiteArrow from '../../../../assets/icons/white_arrow.png';

const Connectform = () => {
    return (
        <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Message"/>
            <button><img alt="arrow" src={whiteArrow}/></button>
        </form>
    );
}

export default Connectform;