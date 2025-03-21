import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Brand from './pages/Brand/Brand.jsx'
import MainLayout from './layout/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout></MainLayout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/brand' element={<Brand></Brand>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
