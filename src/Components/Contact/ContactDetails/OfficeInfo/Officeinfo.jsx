import Viewmap from "./ViewMap/Viewmap";
import "./Officeinfo.css";

const Officeinfo = ({office}) => {
    return (
        <div className="officeInfo">
            <b>{office.name}</b>
            <div className="officeInfoItems">
                <div>
                    <p>Mail:</p>
                    <p>Address:</p>
                    <p>Phone:</p>
                </div>
                <div>
                    <p>{office.mail}</p>
                    <p>{office.address}</p>
                    <p>{office.phone}</p>
                </div>
            </div>
            <Viewmap/>
        </div>
    );
}

export default Officeinfo;