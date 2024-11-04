import './header.css'
import {useState} from "react";

export const Header = () => {
    const [isLogged, setIsLogged] = useState(true);

    return(
        <header className="header">
            <div className='container header-container'>
                <button className='mobile-menu-button'></button>
                <img src="" height='50px' width='50px' alt="avatar"/>

                {/*{!isLogged && <button>Войти</button>}*/}
            </div>

        </header>
    )
}