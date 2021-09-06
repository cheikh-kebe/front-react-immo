import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import Header from "./Components/Header";
import './Styles/reset.scss';
import './Styles/main.scss';
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Footer from "./Components/Footer";

const App = () => {

  return (
    <Router>
      <div className="container__all">
        <Header/>
        <main className="main__content">
          <Switch>
            <Route path="/" exact render={() => <Home/>}/>
            <Route path="/page1" render={() => <Page1/>}/>
            <Route path="/page2" render={() => <Page2/>}/>
            <Route path="/page3" render={() => <Page3/>}/>
          </Switch>
        </main>
        <Footer/>
      </div>
      
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
