import heritage from '../../../assets/About/Desktop/image-heritage.jpg';
import Heritagetitle from './HeritageTitle/Heritagetitle';
import Heritagecontent from './HeritageContent/Heritagecontent';

const Heritage = () => {
    return (
       <section>
           <div>
                <p></p>
                <Heritagetitle/>
                <Heritagecontent/>
           </div>
           <img alt="building" src={heritage}/>
       </section>
    );
}

export default Heritage;