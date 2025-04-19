import { Route, Routes } from "react-router-dom";
import PortfolioPage from "./Page/portfolio/portfolio";
import LandingPage from "./Page/landingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
