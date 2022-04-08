import { Route, Routes } from "react-router-dom";
import Home from "./comp/Home";
import NameModal from "./comp/NameModal";
import Register from "./comp/Register";
import Start from "./comp/Start";

 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="home" element={<Home/>}>
        <Route path="namemodal" element={<NameModal/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
