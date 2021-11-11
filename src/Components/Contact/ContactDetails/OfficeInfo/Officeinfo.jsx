import Viewmap from "./ViewMap/Viewmap";

const Officeinfo = ({office}) => {
    return (
        <div>
            <div>
                <b>{office.name}</b>
                <p>{office.mail}</p>
                <p>{office.address}</p>
                <p>{office.phone}</p>
            </div>
            <Viewmap/>
        </div>
    );
}

export default Officeinfo;