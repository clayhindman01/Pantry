import logo from './logo.svg';
import './App.css';
import Pantry from './components/pantryGrab.jsx';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

//Firebase data
const firebaseConfig = {
    apiKey: "AIzaSyBfLNHHS9B5fci_fdPV4Ie7-Vbmim2IWeQ",
    authDomain: "pantry-9f73f.firebaseapp.com",
    projectId: "pantry-9f73f",
    storageBucket: "pantry-9f73f.appspot.com",
    messagingSenderId: "382840381565",
    appId: "1:382840381565:web:75f295fb1db7dcca01d114",
    measurementId: "G-0PVX6XCYS2"
};

//Initialize firebase app
firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
  
      </Router>
      </header>
    </div>
  );
}

export default App;

