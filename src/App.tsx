import './App.css'
import {Header} from "./components/header/header.tsx";
import {Sidebar} from "./components/sidebar/sidebar.tsx";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./components/profile/profile.tsx";



function App() {

    return (
        <div className="App">
        <Header/>
        <Sidebar/>
        <div className='content'>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App
