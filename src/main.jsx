import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from './context/UserContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="auth" element={<Auth />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="912674771396-o33soc42h5dm0smp92156f0qhncdqgco.apps.googleusercontent.com">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
