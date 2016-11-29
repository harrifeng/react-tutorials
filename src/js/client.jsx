import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives"
import Featured from "./pages/Featured"
import Layout from "./pages/Layout"
import Settings from "./pages/Settings"

ReactDOM.render(
  <Layout>Hello World</Layout>,
  document.getElementById('app'));
