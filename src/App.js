import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import './styles/responsive.css';
import './styles/global.scss';
import { AnimeProvider } from './DataProvider'


function App() {
    return (
        <AnimeProvider> 
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path='/anime-binge' element={<Home/>}/>
                </Routes>
            </div>
        </AnimeProvider>
    );
}

export default App;
