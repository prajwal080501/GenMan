import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
function App() {
  const { getUser, user } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="dark:bg-zinc-950 bg-white px-2 w-full">
      <Router>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={
            user ? <Dashboard /> : <Home />
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
