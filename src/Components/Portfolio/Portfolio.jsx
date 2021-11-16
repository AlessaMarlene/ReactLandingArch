import {desktopProjects, tabletProjects, mobileProjects} from '../../data/projects';
import { useEffect, useState } from 'react';
import Portfolioitem from './PortfolioItem/Portfolioitem';
import Pagename from '../PageName/Pagename';
import './Portfolio.css';

const Portfolio = () => {
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

    return (
        <>
            <Pagename name='PORTFOLIO'/>
            <main className="projects">
                {projects.map((project) => <Portfolioitem key={project.name} project={project}/>)}
            </main>
        </>
    );
}

export default Portfolio;