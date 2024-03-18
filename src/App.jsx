import React  from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import InformationReserve from "./pages/InformationReserve.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/check-in" element={<Home/>} />
                <Route path="/reserva" element={<InformationReserve/>} />
                <Route path="/" element={<Navigate to="/check-in" />}/>
            </Routes>
        </div>
    )
}

export default App