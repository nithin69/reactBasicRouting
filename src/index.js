import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import NotFound from "./NotFound";
import Navbar from "./Components/Navbar";

const rootElement = document.getElementById("root");

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const router = (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/s1" component={Screen1} />
      <Route path="/s2" component={Screen2} />
      <Route path="/s3" component={Screen3} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
ReactDOM.render(router, rootElement);
