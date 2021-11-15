import heritage from '../../../assets/About/Desktop/image-heritage.jpg';
import Heritagetitle from './HeritageTitle/Heritagetitle';
import Heritagecontent from './HeritageContent/Heritagecontent';
import './Heritage.css';

const Heritage = () => {
    return (
       <section className="heritage">
           <div className="heritageInfo">
                <p></p>
                <Heritagetitle/>
                <Heritagecontent/>
           </div>
           <img alt="building" src={heritage}/>
       </section>
    );
}

export default Heritage;