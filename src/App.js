
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import Forma from './components/pages/forma';
import About from './components/pages/about';
import UslugePage from './components/pages/usluge';

function App() {
  return (
    <Router>
      
      <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/forma" component={Forma} exact />
           <Route path="/about" component={About} exact />
           <Route path="/usluge" component={UslugePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
