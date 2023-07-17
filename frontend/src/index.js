import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { RouterProvider, Route, createBrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Feature from './Components/Feature';
import AboutBox from './Components/AboutBox';
import Dashboard from './Components/DashBoard';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Download from './Components/Download';


const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <Navbar/>,
  
  },
  {
    path: "feature",
    element: <Feature/>,
  },
  {
    path: "aboutbox",
    element: <AboutBox/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },

  {
    path: "download",
    element: <Download/>,
  },


  {
    path: "signup",
    element: <SignUp/>,
  },
  {
    path: "login",
    element: <Login/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router ={router}/>
 
);

