import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import SavePassword from "./components/SavePassword"
import { useState } from "react"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="h-screen">
      <Toaster />
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
