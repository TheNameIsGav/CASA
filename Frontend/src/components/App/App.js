import './App.css';
import Login from "../Login/Login";
import About from "../About/About";
import DevPage from "../DevPage/DevPage";
import CreateUser from "../CreateUser/CreateUser";
import NotFound from "../NotFound/NotFound";

// eslint-disable-next-line
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import {useEffect} from 'react';
import Profile from '../Profile/Profile.js';

//import Profile from
//Routes, Route, Link
function App() {

  useEffect(() => {
    document.title = "CASA - Cyberware Texas"
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="about" element={<About/>} />
        <Route path="dev" element={<DevPage/>} />
        <Route path="createuser" element={<CreateUser/>} />
        <Route path="login" element={<Login/>} />
        <Route path="profile" element={<Profile/>} />

      </Routes>
        
    </div>
  );
}

export default App;
