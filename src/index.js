import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import NotFound from "./NotFound";

const rootElement = document.getElementById("root");
const router = (
  <Router>
    <Route path="/" component={App} />
  </Router>
);
ReactDOM.render(router, rootElement);
