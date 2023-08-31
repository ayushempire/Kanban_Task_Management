import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import KanBoard from "./KANBOARD/KanBoard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/KanBoard" element={<KanBoard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
