import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import './header.css'

export default function Header() {
    let isDark;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDark = true;
    }
    const [lightTheme, setLightTheme] = useState(!isDark);

    function toggleTheme() {
        setLightTheme(prevT => !prevT);
    }

    useEffect(() => {
        let body = document.body;
        if (lightTheme) {
            body.classList.remove('dark');
            body.classList.add('light');
        } else {
            body.classList.add('dark');
            body.classList.remove('light');
        }

        Array.from(body.getElementsByTagName("button"))
            .forEach(button => {
                if (lightTheme) {
                    button.classList.remove('button-dark');
                    button.classList.add('button-light');
                } else {
                    button.classList.add('button-dark');
                    button.classList.remove('button-light');
                }
            });

    }, [lightTheme])


    return (
        <div className='headerContainer'>
            <button onClick={toggleTheme}>
                {lightTheme ? <FaSun /> : <FaMoon />}
            </button>
            <NavLink to='/'>
                <h1>Expenses</h1>
            </NavLink>
            <NavLink to='/analyse'>
                <button>
                    <FaSignOutAlt />
                </button>
            </NavLink>
        </div>
    )
}
