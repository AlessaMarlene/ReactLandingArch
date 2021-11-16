import Featuredtitle from "./FeaturedTitle/Featuredtitle";
import Commonlink from "../CommonLink/Commonlink";
import Featureditem from "./FeaturedItem/Featureditem";
import {desktopProjects, tabletProjects, mobileProjects} from "../../../data/projects";
import { useEffect, useState } from 'react';
import './Featured.css';

const Featured = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let projects;

    if(width >= 1000) projects = desktopProjects;
    else if(width >= 700) projects = tabletProjects;
    else projects = mobileProjects;

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