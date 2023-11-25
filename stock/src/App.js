import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import TradingViewWidget from "./pages/TradingView";
// import SingleCompany from "./pages/toplose";
import Topgain from "./pages/topgain";
import Toplose from "./pages/toplose";
import Fullgraph from "./pages/fullgraph";
import Blog from "./pages/blog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/fullgrapg/AAPL" element={<Fullgraph />} />
        <Route path="/toplose/:name" element={<Toplose />} />
        <Route path="/topgain/:name" element={<Topgain />} />
        <Route path="/blog" element={<Blog />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
