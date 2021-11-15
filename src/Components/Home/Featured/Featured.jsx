import Featuredtitle from "./FeaturedTitle/Featuredtitle";
import Commonlink from "../CommonLink/Commonlink";
import Featureditem from "./FeaturedItem/Featureditem";
import projects from "../../../data/projects";
import './Featured.css';

const Featured = () => {
    const items = projects.reduce((previous, current) => {
        if(current.name === 'Project Del Sol' || current.name === '2288 Tower' || current.name === 'Le Prototype'){
            previous.push(current);
        }

        return previous;
    }, []);

    return (
        <section className="featured">
            <div>
                <Featuredtitle/>
                <Commonlink text="See All" pageName="/portfolio"/>
            </div>
            <div>
                {items.map((item, index) => <Featureditem key={index} itemInfo={item} number={index+1}/>)}
            </div>
        </section>
    );
}

export default Featured;