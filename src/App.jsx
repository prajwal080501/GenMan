import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import SavePassword from "./components/SavePassword"
import { useContext, useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"
import { UserContext } from "./context/UserContext"

function App() {
  const { getUser, user } = useContext(UserContext);


  useEffect(() => {
    getUser();
  }, [])
  console.log(user?.name);
  return (
    <div className="dark:bg-zinc-950 w-full min-h-screen">
      <Toaster />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
