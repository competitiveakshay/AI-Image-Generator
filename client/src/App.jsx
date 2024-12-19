import { Route, Routes } from "react-router-dom";
import BuyCredit from "./Pages/BuyCredit";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Navbar />
      {showLogin && <LoginPage />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
