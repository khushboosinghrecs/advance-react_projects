import React from "react";
import {Link} from 'next-link';
import { useTheme } from "../theme-context";

const Navbar=()=>{
    const [theme, toggleTheme] = useTheme();
    const toggleNode =()=>{
        toggleTheme();
    }

    return(
        <nav className={`navbar ${theme}`}>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Blog</Link>
            </div>
            <div className="node-switch">
                <label>
                    <input type="checkbox" onChange={toggleNode} checked={theme ==='dark'}/>
                </label>
                <span className="slider round"></span>
            </div>

        </nav>
    )
}