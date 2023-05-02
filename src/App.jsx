import { BrowserRouter, Route, Routes } from "react-router-dom";

import Compile from "./Compile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Compile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
