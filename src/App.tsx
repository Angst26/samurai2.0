import './App.css'
import {Header} from "./components/header/header.tsx";
import {Sidebar} from "./components/sidebar/sidebar.tsx";
import {Route, Routes} from "react-router-dom";
import {ProfileContainer} from "./components/profile/profileContainer.tsx";



function App() {

    return (
        <div className="container">
        <Header/>
        <Sidebar/>
        <div className='content'>
            <Routes>
                <Route path="/profile" element={<ProfileContainer/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App
