import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import './index.css'
// Pages
import App from './App.jsx'
import Home from './Home'
import Dashboard from './Dashboard.jsx'
import Signup from './Signup.jsx'
import About from './About.jsx'
import Register from './Register.jsx';
//Layouts
// import RootLayouts from './layouts/RootLayouts.jsx';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6h4sMpNPjr51nv6mVT8kcE4wblXPWm0o",
  authDomain: "crowlly-app.firebaseapp.com",
  projectId: "crowlly-app",
  storageBucket: "crowlly-app.appspot.com",
  messagingSenderId: "870721605586",
  appId: "1:870721605586:web:5354461e46f4b13c94c20b"
};

initializeApp(firebaseConfig);

// init firebase app
const db = getFirestore()

//init services
const colRef = collection(db, 'Users')

//get collection data
getDocs(colRef)
  .then((snapshot) => {
    let Users = []
    snapshot.docs.forEach((doc) => {
      Users.push({
        ...doc.data(), id: doc.id
      })
      console.log(Users)
    })
      .catch(err => {
        console.log(err.message)
      })
  })

const router = createBrowserRouter(
  createRoutesFromElements(
    //path='/' element={<RootLayouts />} 
    <Route >
      <Route path="/" element={<App />} />  {/* Home */}
      <Route path='/about' element={<About />} />
      <Route path='/signup' elemenet={<Signup />} />
      <Route exact path="/register" element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
    // [
    //   {
    //     path: "/",
    //     element: <App />,
    //   },
    //   {
    //     path: "dashboard",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "signup",
    //     element: <Signup />,
    //   },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    //   {
    //     path: "register",
    //     element: <Register />,
    //   },
    //   {
    //     path: "login",
    //     element: <Login />,
    //   },
    // ]
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
