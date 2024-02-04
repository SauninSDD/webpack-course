import React, {CSSProperties, useCallback, useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import flyBirdPng from '@/assets/flybird.png';
import cat from '@/assets/cat.jpg';
import LineChart from '@/assets/line-chart.svg';

function TODO1() {
    TODO2();
}

function TODO2() {
     throw new Error()
}

export const App = () => {
    // TODO('ddk');
    const [count, setCount] = useState(0);
    const onButtonClick = () => {TODO1()};/*useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setCount(prevState => prevState + 1);
    }, []);*/

    const logoStyle: CSSProperties = {
        fill: "black",
        width: "500px",
        height: "500px"
    };

/*       if(__PLATFORM__ === 'mobile') {
           return <div>IS MOBILE PLATFORM</div>
       }

       if(__PLATFORM__ === 'desktop') {
           return <div>IS DESKTOP PLATFORM</div>
       }

       if(__ENV__ === 'development'){

       }*/

    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={flyBirdPng} alt=""/>
                <img width={100} height={100} src={cat} alt=""/>
            </div>
            <div>
                <LineChart style={logoStyle}/>
            </div>
            <Link to={"/about"}>about</Link>
            <Link style={{marginLeft: "15px"}} to={"/shop"}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={onButtonClick}><span>{count}</span></button>
            <Outlet/>
        </div>
    );
};

