import React from 'react';
import { Outlet } from 'react-router-dom';
import Foot from '../Pages/Footer/Foot';
import Nave from '../Pages/Nave/Nave';

const LayOut = () => {
    return (
        <div>
            <Nave></Nave>
            <Outlet></Outlet>
            <Foot></Foot>
            
        </div>
    );
};

export default LayOut;