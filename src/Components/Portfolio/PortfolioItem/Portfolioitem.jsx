import './Portfolioitem.css';

const Portfolioitem = ({project}) => {
    return (
       <div className="portfolioItem" style={{backgroundImage:`url(${project.image})`}}>
           <h3>{project.name}</h3>
           <p>{project.date}</p>
       </div>
    );
}

export default Portfolioitem;