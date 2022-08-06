import React from "react";
import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Loader from "./components/UI/Loader";

const Portfolio = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 700));
  return import("./pages/Portfolio");
});

const NotFound = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 700));
  return import("./pages/NotFound");
});

const Projects = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import("./pages/Projects");
});

const ProjectDetail = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return import("./components/content/ProjectDetail");
});

const NFTs = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return import("./pages/NFTs");
});

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/portfolio" />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/projects/:projectID">
          <ProjectDetail />
        </Route>
        <Route path="/NFTs">
          <NFTs />
        </Route>
        <Route path="/404" exact>
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
