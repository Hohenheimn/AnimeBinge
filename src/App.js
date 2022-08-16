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
                {/* <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes> */}
                <Home/>
            </div>
        </AnimeProvider>
    );
}

export default App;
