import projects from '../../data/projects';
import Portfolioitem from './PortfolioItem/Portfolioitem';
import Pagename from '../PageName/Pagename';
import './Portfolio.css';

const Portfolio = () => {
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