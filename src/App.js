import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Counter from './Views/Counter';

function App() {
  return (
    <div>
      
      <Router>
        <Header />

        <div className = "p-3">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/counter">
              <Counter/>
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
