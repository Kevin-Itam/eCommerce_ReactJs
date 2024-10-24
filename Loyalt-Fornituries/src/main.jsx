import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./Pages/HomePage.jsx"
import ErrorPage from './Pages/ErrorPage.jsx'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import Login from './Pages/Login.jsx'


const homeroutes = ["/" , "/Home" , "/home"];
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      ...homeroutes.map((path)=>({path:path,
        element:<Home/>
      })),
      {
        path:"shop",
        element:<Shop/>,
      },
      {
        path:"Cart",
        element:<Cart/>,
      },
      {
        path:"Login",
        element:<Login/>,
      }
    ,]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
