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
        <body>
          <Switch>
            <Route exact path="/" component={ListOngs}></Route>
            <Route path="/ongs" component={ListOngs}></Route>
            <Route path="/add-ongs" component={AddOngs}></Route>
            <Route path="/edit-ong" component={AddOngs}></Route>
            <Route path="/details-ong" component={DetailsOngs}></Route>
          </Switch>
        </body>
        <footer className='footer'>
          <Footer />
        </footer>

      </Router>
    </div>
  );
}

export default App;
