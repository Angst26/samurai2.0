import './header.css'
import {useState} from "react";
import {MobileNavbar} from "../navbar/mobile/MobileNavbar.tsx";

export const Header = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);


    let openStyleButton = '', openMenu = '';

    if (menuOpen) {
        openStyleButton = 'open'
        openMenu = 'opened'
    };

    const menuButtonHandler = () => {
        setMenuOpen(prev => !prev);
    };

    return(
        <header className="header">
            <MobileNavbar openMenu={openMenu}/>
            <div className='container header-container'>
                <button className={`mobile-menu-button ${openStyleButton}`} onClick={menuButtonHandler}></button>
                <img src="" height='50px' width='50px' alt="avatar"/>

                {/*{!isLogged && <button>Войти</button>}*/}
            </div>

        </header>
    )
}