import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import Trimester1 from './components/pages/Trimester1';
import Trimester2 from './components/pages/Trimester2';
import Trimester3 from './components/pages/Trimester3';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/trimester1' component={Trimester1} />
        <Route path='/trimester2' component={Trimester2} />
        <Route path='/trimester3' component={Trimester3} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;