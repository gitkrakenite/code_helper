import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Java from "./pages/Java";
import Cprog from "./pages/Cprog";
import Cplus from "./pages/Cplus";
import Web from "./pages/Web";
import Python from "./pages/Python";
import "./App.css";
import Flutter from "./pages/Flutter";

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/java" element={<Java />} />
          <Route path="/cprog" element={<Cprog />} />
          <Route path="/cplus" element={<Cplus />} />
          <Route path="/web" element={<Web />} />
          <Route path="/python" element={<Python />} />
          <Route path="/flutter" element={<Flutter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
