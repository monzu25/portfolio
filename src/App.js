import React from "react";
// import { Nav } from "react-bootstrap";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Prices from "./components/Prices";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectDetailsView from "./components/ProjectDetailsView";
import PageNotFound from "./components/PageNotFound";



function App() {
  return (
    <div>
      <Router>
        {/*  */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/detailsView/:projectId">
            <ProjectDetailsView />
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
