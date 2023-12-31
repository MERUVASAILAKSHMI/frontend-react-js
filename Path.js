import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import Wetherapp from "./components/Wetherapp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

let Mpath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/wet" element={<Wetherapp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mpath;
