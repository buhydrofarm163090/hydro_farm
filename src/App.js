import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/ฺBanner.js";
import { Contact } from "./components/Contact.js";
import { Dashboard } from "./components/Dashboard.js";
import { Tutorial } from "./components/Tutorial.js";
import { Plot } from "./components/Plot.js";

const App = () => {
  return (
      <>
    <Router>
      <NavBar />
        <Switch>
          <Route path='/' Component={Banner} exact> <Banner /> </Route>
          <Route path='/tutorial' Component={Tutorial} exact> <Tutorial /> </Route>
          <Route path='/dashboard' Component={Dashboard} exact> <Dashboard /> </Route>
          <Route path='/plot' Component={Plot} exact> <Plot /> </Route>
          <Route path='/contact' Component={Contact} exact> <Contact /> </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;

