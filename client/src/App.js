import Register from "./components/Register"
import Login from "./components/Login"
import Loginad from "./components/Loginad"
import Home from "./components/Home"
import Contactus from "./components/ContactUs"
import Services from "./components/Services"
import Profile from "./components/Profile"

import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"
import ListUsers from "./components/ListUsers"
import ListProducts from "./components/ListProduct"
import ListReclamation from "./components/ListReclamation"
import Products from "./components/Products"
import Log from "./components/Login/Log"
import { ContextProvider } from "./context/Context"
import { React } from "react";
import Commentaires from "./components/Forum/Commentaires"
import { BrowserRouter, Route, Routes } from "react-router-dom"





function App() {

  return (
    <ContextProvider >
      <BrowserRouter>
        <Nav/>


        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Loginad" element={<Loginad />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ListUsers" element={<ListUsers />} />
          <Route path="/ListReclamation" element={<ListReclamation />} />
          <Route path="/ListProduct" element={<ListProducts />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Commentaires" element={<Commentaires />} />
          <Route path="/Log" element={<Log />} />



        </Routes>
        <Footer />


      </BrowserRouter>

    </ContextProvider >
  );
}

export default App;
