import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub, {gitHubInfoLoader} from './components/GitHub/GitHub.jsx'

const router = createBrowserRouter([
{
  path:'/',
  element:<Layout/>,
  children:[
    {
        path:'',
        element:<Home/>
    },

    {
      path:'about',
      element:<About/>
    },

    {
      path:'contactUs',
      element:<Contact/>
    },

    
    {
      path:'user/:userId',
      element:<User/>
    },

    {
      path:'gitHub',
      element:<GitHub/>,
      loader:{gitHubInfoLoader},
    }
  ]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
