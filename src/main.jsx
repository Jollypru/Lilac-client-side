import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Brand from './pages/Brand/Brand.jsx'
import MainLayout from './layout/MainLayout.jsx'
import Register from './auth/Register.jsx'
import Shop from './pages/Shop/Shop.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/brand',
        element: <Brand></Brand>
      },
      {
        path: '/categories', 
        element: <Brand></Brand>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/products/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/Products.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<MainLayout></MainLayout>}>
  //       <Route path='/' element={<Home></Home>}></Route>
  //       <Route path='/brand' element={<Brand></Brand>}></Route>
  //       <Route path='/categories' element={<Brand></Brand>}></Route>
  //       <Route path='/shop' element={<Brand></Brand>}></Route>
  //     </Route>
  //     <Route path='/register' element={<Register></Register>}></Route>
  //   </Routes>
  // </BrowserRouter>
  <RouterProvider router={routes}></RouterProvider>
)
