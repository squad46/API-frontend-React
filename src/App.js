import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListOngs from './components/Ongs/ListOngs';
import AddOngs from './components/Ongs/AddOngs';
import DetailsOngs from './components/Ongs/DetailsOngs';
import Stats from './components/Home/stats';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <Switch>
            <Route exact path="/" exact component={Stats}></Route>
            <Route path="/ongs" component={ListOngs}></Route>
            <Route path="/add-ongs" component={AddOngs}></Route>
            <Route path="/edit-ong" component={AddOngs}></Route>
            <Route path="/details-ong" component={DetailsOngs}></Route>
            {/*
            <Route path="/home" component={Stats}></Route>
            */}          
            </Switch>
          <Footer />
      </Router>
    </div>
  );
}
export default App;
