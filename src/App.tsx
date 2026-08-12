import React, {useState, useEffect} from "react";
import {
  Main,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import ProjectBlock from "./components/ProjectBlock/ProjectBlock";
import { my_data } from "./assets/my_data";
import './variables.scss'

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    // TODO: Agregar Routing copiando el Main.js del otro portafolio
    return (
    <div className={`main-container light-mode`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main data={my_data.introduction}/>
            <ProjectBlock projects={my_data.games}/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;