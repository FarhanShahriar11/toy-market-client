import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './pages/Layout/hom/Home.jsx';
import AllToy from './pages/AllToy/AllToy.jsx';
import Login from './components/Login/Login/Login.jsx';
import Register from './components/Login/Register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Blog from './components/Blog/Blog.jsx';
import ToyDetails from './components/ToyDetails/ToyDetails.jsx';
import AddToy from './pages/My Toys/AddToy.jsx/AddToy.jsx';
import MyToys from './pages/My Toys/MyToys.jsx';
import ToysTable from './pages/AllToy/ToysTable.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import MyToysTable from './pages/My Toys/MyToysTable.jsx';
import UpdateToys from './pages/My Toys/UpdateToys.jsx';
import Error from './components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/allToy',
        element:<AllToy></AllToy>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addToy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'/myToys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/toyDetails/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-market-server-rho-ten.vercel.app/allToys/${params.id}`),
      },
      {
        path: '/updateToys/:id',
        element: <PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-market-server-rho-ten.vercel.app/allAddToy/${params.id}`)
    },

    ]
  },
  {
    path: '*',
    element: <Error></Error>
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
