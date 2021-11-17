import './App.css';
import About from './components/about';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
