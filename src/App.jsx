import React  from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Reserve from "./pages/Reserve.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/reserva" element={<Reserve/>} />
            </Routes>
        </div>
    )
}

export default App