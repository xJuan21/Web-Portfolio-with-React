import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <>
        <header class="NavBar">
            <div class="container">
                    
                <div class="NavBar-bg">
                    <nav class="Options">
                        <ul>
                            <li class="menu-item-has-children">
                                <a href="#About">About Me</a>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#Projects">Projects</a>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#Resume">Resume</a>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#Contact">Contact Me</a>
                            </li>

                        </ul>
                    </nav>
                </div>

            </div>
        </header>
        </>
    )
}

export default Nav