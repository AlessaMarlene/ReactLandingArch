const Featureditem = ({itemInfo, number}) => {
    return (
        <div style={{backgroundImage:itemInfo.image}}>
            <h1>{number}</h1>
            <h4>{itemInfo.name}</h4>
            <p>View All Projects</p>
        </div>
    );
}

export default Featureditem;