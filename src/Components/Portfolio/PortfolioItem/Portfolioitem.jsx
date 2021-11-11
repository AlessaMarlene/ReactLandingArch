const Portfolioitem = ({project}) => {
    return (
       <div style={{backgroundImage:project.image}}>
           <h3>{project.name}</h3>
           <p>{project.date}</p>
       </div>
    );
}

export default Portfolioitem;