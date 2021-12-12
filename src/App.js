import { Fragment} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import { Route,Switch,Redirect } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
