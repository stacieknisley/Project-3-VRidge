import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import groceryList from "./components/Nav/pages/groceryList";
import myFridge from "./components/Nav/pages/myFridge";
import recipe from "./components/Nav/pages/recipe";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import FormHeader from "./components/Login";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

const AppForm = () => <FormHeader />;

const App = () => (

  // BrowserRouter = event => {


  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FormHeader} />
      <Route path="/login" component={FormHeader} />
      <Route component={DefaultContainer} />
    </Switch>
  </BrowserRouter>

);

const DefaultContainer = () => {

  if (false) {
    return <Redirect to='/login' />
  }


  return (
    <div className="container">
      <Nav />
      <Route exact path="/groceryList/:user" component={groceryList} />
      <Route exact path="/myFridge/:user" component={myFridge} />
      <Route path="/recipe/:user" component={recipe} />
      {/* <Route component={NotFound}/> */}

    </div>
  )
}


export default App;