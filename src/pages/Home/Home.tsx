import { my_data } from "../../assets/my_data";
import { Main } from "../../components";
import ProjectBlock from "../../components/ProjectBlock/ProjectBlock";

function Home() {
    document.title = 'bups.gamedev'
    return (
        <div className={`main-container light-mode`}>
            <Main data={my_data.introduction}/>
            <ProjectBlock projects={my_data.games}/>
        </div>
    )
}

export default Home;