import { Route, Routes } from "react-router-dom";

import Nav from "./components/common/Nav";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<ShowDetail />} />
      </Routes>
    </>
  );
}

export default App;
