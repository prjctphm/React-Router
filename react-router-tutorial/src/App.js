import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";


function App() {
  return ( 
    <Router>
      <div className="App">
        <Header/>
      </div>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/profile' component={Profile}/>
    </Router>
  
  );
}

export default App;
