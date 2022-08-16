import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (

    <Router>
      
      <Header />
      <div className="bg-slate-200">
        <Routes>
          <Route path="/" element={<Home />}/>          
          <Route path="/checkout" element={<Checkout/>}/>          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
