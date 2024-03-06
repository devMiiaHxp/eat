import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,Routes } from "react-router-dom";
import HomePage from './components/home.jsx';
import JoinOurTeam from './components/join/index.jsx';
import JoinOurCohort from './components/cohort/index.jsx';
import BecomeAnInvestor from './components/invest/index.jsx';
import Faq from './components/faq/index.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/join',
    element:<JoinOurTeam/>
  },
  {
    path:'/join-cohort',
    element:<JoinOurCohort/>
  },
  {
    path:'/invest',
    element:<BecomeAnInvestor/>
  },
  {
    path:'/faq',
    element:<Faq/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} >
      <Routes>
        {router}
      </Routes>
      </RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
