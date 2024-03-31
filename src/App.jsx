/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router';
import Home from '../pages/Home';
import Analytics from '../pages/Analytics';
import Layout from '../Layouts/Layout';
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='/analyse' element={<Analytics />} />
    </Route>
  ))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
