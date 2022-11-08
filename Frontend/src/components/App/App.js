import './App.css';
import Login from "../Login/Login";
import About from "../About/About";
import DevPage from "../DevPage/DevPage";
import CreateUser from "../CreateUser/CreateUser";
import NotFound from "../NotFound/NotFound";
import Body from "../StudentPage/Body";
//import StudNavbar from '../StudentPage/StudNavbar';
import StudMainPage from '../StudentPage/StudMainPage';
import StudProfilePage from '../StudentPage/StudProfilePage';
import StudLogoutPage from '../StudentPage/StudLogoutPage';
// eslint-disable-next-line
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import {useEffect} from 'react';


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
        <Route path="stud/main" element={<StudMainPage/>} />
        <Route path="stud/profile" element={<StudProfilePage/>} />
        <Route path="loggedout" element={<StudLogoutPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;