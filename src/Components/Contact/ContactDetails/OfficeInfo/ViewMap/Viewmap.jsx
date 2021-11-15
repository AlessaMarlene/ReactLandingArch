import blackArrow from '../../../../../assets/icons/black__arrow.png';
import './Viewmap.css';

const Viewmap = () => {
    return (
        <button className="viewMapButton">View on Map<img alt="arrow" src={blackArrow} /></button>
    );
};

export default Viewmap;
