import Login from "./components/Login";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sucess from "./components/Sucess";
import Failure from "./components/Failure";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/success" element={<Sucess />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
