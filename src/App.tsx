import React, {useState, useEffect} from "react";
import {
  Navigation,
  Footer,
} from "./components";
import './index.scss';
import { my_data } from "./assets/my_data";
import './variables.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/Games/GamePage";
import Home from "./pages/Home/Home";
import FadeIn from "./components/FadeIn";

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
    <BrowserRouter>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/game/:game_id" element={<GamePage game_data={my_data.games}/>} />
            </Routes>
        </FadeIn>
        <Footer />
    </BrowserRouter>
    );
}

export default App;