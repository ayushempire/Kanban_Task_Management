import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
