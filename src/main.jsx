import React from 'react'
import App from './App.jsx'
import './index.css'
import Register from './Register.jsx';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import Dashboard from './Dashboard.jsx'
import Signup from './Signup.jsx'
import About from './About.jsx'
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <About />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
