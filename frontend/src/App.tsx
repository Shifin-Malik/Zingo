

import { Route, Routes } from "react-router-dom";
import GetStartedPage from "./pages/GetStartedPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/Zingo" element={<GetStartedPage />} />
      </Routes>
    </div>
  );
}

export default App;
