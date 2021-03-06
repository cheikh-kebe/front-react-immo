import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
//styles
import './Styles/reset.scss';
import './Styles/main.scss';
//components
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Add from "./Pages/Add";

import Footer from "./Components/Footer";
import { SignupPage } from "./Pages/SignUpPage";
import { SignInPage } from "./Pages/SignInPage";
import { Provider } from 'react-redux';
import { store, persistor } from "./Store/store";
import { PersistGate } from 'redux-persist/integration/react'
import {useSelector} from 'react-redux';
import NewAd from "./Pages/NewAd";
import { MyAds} from "./Pages/MyAds";
import ModifyAd from "./Pages/ModifyAd";


const App = () => {

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector(state => state.user.isLogged)
  console.log(isLogged)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/sign_in" }} />
        )
      }
    />
  );
};
  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <Router>
      <div className="container__all">
        <Header/>
        <main className="main__content">
          <Switch>
            <PrivateRoute path="/nouvelle_annonce" component={NewAd} />
        
            <PrivateRoute path="/mes_annonces" component={MyAds} />
            <PrivateRoute path="/annonces/:annonceSlug/modification" component={ModifyAd} />
            <Route path="/" exact render={() => <Home/>}/>
            <Route path="/annonces/:annonceSlug" render={() => <Add key={uuidv4()}/>}/>
            
            <Route path="/sign_up" render={() => <SignupPage/>}/>
            <Route path="/sign_in" render={() => <SignInPage/>}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
    </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
