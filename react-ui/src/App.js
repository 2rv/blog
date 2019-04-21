import React, {Component} from 'react';
import { Provider } from 'react-redux'
import {store} from "./store/configureStore";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './assets/reset.css';
import './assets/main.css';
import Header from "./components/Header/Header";
import ScrollListener from "./components/ScrollListener/ScrollListener";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Article from "./components/Article/Article";
import SearchWords from "./components/SearchWords/SearchWords";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Provider store={ store }>
          <ScrollListener>

            <Route component={Header}/>
            <Content>
              <Switch >
                <Redirect exact from="/" to="/home"/>
                <Redirect exact from="/home" to="/home/all"/>

                <Route path="/home/:filter" component={Home}/>
                <Route path="/search" component={SearchWords}/>
                <Route path="/post/:id" component={Article}/>

                <Route component={NoMatch}/>
              </Switch>
            </Content>
            <Footer/>

          </ScrollListener>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App;
