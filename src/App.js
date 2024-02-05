import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';


let routers = createBrowserRouter([
  {path:'' , element: <Layout/> , children: [
    {index:true, element: <Home/>},
    {path:'about', element: <About/>},
    {path:'contact', element: <Contact/>},
    {path:'portfolio', element: <Portfolio/>}
  ]}
])

export default function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
  
}
