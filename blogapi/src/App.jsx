import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage/HomePage';
import Blogdetails from './pages/Blog/Blogdetails';


const App = ()  =>{

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index={true} element={<HomePage/>}/>
      <Route path="blog/:id" element={<Blogdetails/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  );
}


export default App
