import projects from '../../data/projects';
import Portfolioitem from './PortfolioItem/Portfolioitem';
import Pagename from '../PageName/Pagename';

const Portfolio = () => {
    return (
        <>
            <Pagename name='Portfolio'/>
            <main>
                {projects.map((project) => <Portfolioitem key={project.name} project={project}/>)}
            </main>
        </>
    );
}

export default Portfolio;