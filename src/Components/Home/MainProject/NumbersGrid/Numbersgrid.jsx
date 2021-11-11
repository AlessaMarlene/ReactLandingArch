import Numbercell from "./NumberCell/Numbercell";

const NumbersGrid = () => {
    const numbers = ['01', '02', '03', '04'];

    return (
        <div>
            {numbers.map((number) => <Numbercell key={number} number={number}/>)}
        </div>
    );
}

export default NumbersGrid;