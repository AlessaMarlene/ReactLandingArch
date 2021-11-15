import Numbercell from "./NumberCell/Numbercell";
import './Numbersgrid.css';

const NumbersGrid = () => {
    const numbers = ['01', '02', '03', '04'];

    return (
        <div className="numbersGrid">
            {numbers.map((number) => <Numbercell key={number} number={number}/>)}
        </div>
    );
}

export default NumbersGrid;