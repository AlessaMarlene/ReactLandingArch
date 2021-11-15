import './Numbercell.css';

const Numbercell = ({number}) => {
    return(
        <div className="numberCell">
            <h4>{number}</h4>
        </div>
    );
}

export default Numbercell;