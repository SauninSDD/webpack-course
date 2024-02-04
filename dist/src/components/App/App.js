import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import flyBirdPng from '@/assets/flybird.png';
import cat from '@/assets/cat.jpg';
import LineChart from '@/assets/line-chart.svg';
function TODO(a) {
    console.log('todo');
}
export var App = function () {
    TODO('ddk');
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var onButtonClick = useCallback(function (event) {
        setCount(function (prevState) { return prevState + 1; });
    }, []);
    var logoStyle = {
        fill: "green",
        width: "500px",
        height: "500px"
    };
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "IS MOBILE PLATFORM" });
    }
    if (__PLATFORM__ === 'desktop') {
        return _jsx("div", { children: "IS DESKTOP PLATFORM" });
    }
    if (__ENV__ === 'development') {
    }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { width: 100, height: 100, src: flyBirdPng, alt: "" }), _jsx("img", { width: 100, height: 100, src: cat, alt: "" })] }), _jsx("div", { children: _jsx(LineChart, { style: logoStyle }) }), _jsx(Link, { to: "/about", children: "about" }), _jsx(Link, { style: { marginLeft: "15px" }, to: "/shop", children: "shop" }), _jsx("h1", { className: classes.value, children: count }), _jsx("button", { className: classes.button, onClick: onButtonClick, children: _jsx("span", { children: count }) }), _jsx(Outlet, {})] }));
};
