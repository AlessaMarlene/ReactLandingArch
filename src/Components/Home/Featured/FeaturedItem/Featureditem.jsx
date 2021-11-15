import './Featureditem.css';
import Linktopage from '../../../LinkToPage/Linktopage';

const Featureditem = ({itemInfo, number}) => {
    return (
        <div className="featuredItem" style={{backgroundImage:`url(${itemInfo.image})`}}>
            <h1>{number}</h1>
            <div>
                <h4>{itemInfo.name}</h4>
                <Linktopage path="./portfolio" text="View All Projects"/>
            </div>
        </div>
    );
}

export default Featureditem;