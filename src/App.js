import React from "react";
import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import * as emailjs from "emailjs-com";

import Loader from "./components/UI/Loader";
import Transition from "./components/UI/Transition";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

const Portfolio = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 700));
  return import("./pages/Portfolio");
});

const NotFound = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 700));
  return import("./pages/NotFound");
});

function App() {
  // const template_params = {
  //   to_email: "to_email_value",
  // };

  // const service_id = "default_service";
  // const template_id = "service_wp9ydnd";
  // emailjs.send(service_id, template_id, template_params);

  return (
    <Suspense
      fallback={
        <>
          <Loader />
          <Transition />
        </>
      }
    >
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
