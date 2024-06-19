import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import ErrorPage from './Pages/ErrorPage.jsx'
import Shop from './Pages/Shop.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   }
// ])
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[{
      path:"/",
      element:<Home/>,
    },{
      path:"shop",
      element:<Shop/>,
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
