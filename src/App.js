import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import SalonPage from "./pages/salon/SalonPage";
import Category from "./pages/category/Category";

function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/salon/:id" element={<SalonPage/>}/>
                    <Route path="/category/:id" element={<Category/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
