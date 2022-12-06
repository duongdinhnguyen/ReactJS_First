import React, {useState} from "react";
import {Link, Routes, Route} from 'react-router-dom'
import { Home, User, Abouts, Profile } from "./pages";

function App() {
  return (
    <div>
      <h1>React Router Navbar</h1>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/abouts'>Abouts</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/abouts" element={<Abouts/>}/>
      </Routes>
    </div>
  );
}

export default App;
