
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/Zingo" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
