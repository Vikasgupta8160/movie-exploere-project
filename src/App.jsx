import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App