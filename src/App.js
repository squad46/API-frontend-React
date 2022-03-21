import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListOngs from './components/Ongs/ListOngs';
import AddOngs from './components/Ongs/AddOngs';
import DetailsOngs from './components/Ongs/DetailsOngs';

function App() {
  return (
    <div>
      <Router>
        <header>
          <Header />
        </header>

          <Switch>
            <Route exact path="/" component={ListOngs}></Route>
            <Route path="/ongs" component={ListOngs}></Route>
            <Route path="/add-ongs/:id" component={AddOngs}></Route>
            <Route path="/details-ong/:id" component={DetailsOngs}></Route>
          </Switch>
        <footer className='footer'>
          <Footer />
        </footer>

      </Router>
    </div>
  );
}

export default App;
