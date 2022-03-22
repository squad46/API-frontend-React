import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListOngs from './components/Ongs/ListOngs';
import AddOngs from './components/Ongs/AddOngs';
import DetailsOngs from './components/Ongs/DetailsOngs';

const Stats = lazy(() => import ('./components/Home/stats'));
//import Stats from './components/Home/stats';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <Switch>
            <Suspense fallback={ <h2 className='text-center mt-5'>Carregando...</h2> }>
              <Route path="/" exact component={Stats}></Route>
              <Route path="/ongs" component={ListOngs}></Route>
              <Route path="/add-ongs/:id" component={AddOngs}></Route>
              <Route path="/edit-ong" component={AddOngs}></Route>
              <Route path="/details-ong/:id" component={DetailsOngs}></Route> 
            </Suspense>        
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}
export default App;
