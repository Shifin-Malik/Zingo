

import { Route, Routes } from "react-router-dom";
import GetStartedPage from "./pages/GetStartedPage";
import Home from "./pages/Home";


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
