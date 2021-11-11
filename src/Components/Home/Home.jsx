import Pagename from "../PageName/Pagename";
import Mainproject from "./MainProject/Mainproject";
import Welcome from "./Welcome/Welcome";
import Aboutteam from "./AboutTeam/Aboutteam";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <>
            <Pagename name='HOME'/>
            <main>
                <Mainproject/>
                <Welcome/>
                <Aboutteam/>
                <Featured/>
            </main>
        </>
    );
}

export default Home;