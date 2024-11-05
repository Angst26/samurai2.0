import './App.css'
import {Header} from "./components/header/header.tsx";
import {Navbar} from "./components/navbar/navbar.tsx";
import {Route, Routes} from "react-router-dom";
import {ProfileContainer} from "./components/profile/profileContainer.tsx";
import {useState} from "react";


function App() {
    const [theme, setTheme] = useState('theme-dark');

    return (<>

            <div className={`${theme} wrapper`}>
                <Header/>
                <main>
                    <div className={`container`}>
                        <Navbar/>
                        <div className='content'>
                            <Routes>
                                <Route path="/profile" element={<ProfileContainer/>}/>
                            </Routes>
                        </div>
                    </div>
                </main>

            </div>
        </>

    )
}

export default App
