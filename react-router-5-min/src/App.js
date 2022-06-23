// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <div className="container">
        <p>Let's Add Routing</p>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

      <Route path="/" exact component={Home}/>
      <Route path="/about"  component={About}/>
      </div>
    </Router>
  );
}

export default App;
