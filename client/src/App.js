import { Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import About from "./components/About";
import DisplayAll from "./components/DisplayAll";
import DisplayOne from "./components/DisplayOne";
import CreateOne from "./components/CreateOne";
import EditOne from "./components/EditOne";
import HeaderNav from "./components/HeaderNav";
import Footer from './components/Footer';
import "./App.css";

function App() {
    return (
        <div>
            <HeaderNav />
            
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/post" element={<DisplayAll />} />
                <Route path="/post/:id" element={<DisplayOne />} />
                <Route path="/post/create" element={<CreateOne />} />
                <Route path="/post/edit/:id" element={<EditOne />} />
                <Route />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
