import logo from './logo.svg';
import './App.css';
import Pantry from './components/pantryGrab.jsx';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/login"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
