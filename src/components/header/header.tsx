import './header.css'
import {useState} from "react";

export const Header = () => {
    const [isLogged, setIsLogged] = useState(true);
    const [menuOpen, setMenuOpen] = useState(true);

    let openClass = '';

    if (menuOpen) {
        openClass = 'open'
    };

    const menuButtonHandler = () => {
        setMenuOpen(prev => !prev);
    };

    return(
        <header className="header">
            <div className='container header-container'>
                <button className={`mobile-menu-button ${openClass}`} onClick={menuButtonHandler}></button>
                <img src="" height='50px' width='50px' alt="avatar"/>

                {/*{!isLogged && <button>Войти</button>}*/}
            </div>

        </header>
    )
}