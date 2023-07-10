/**
 * Component that defines routes for application
 */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Layout from "./hoc/Layout/Layout";
// import Dataflow from "./containers/Dataflow/Dataflow";
import HomePage from "./components/dashboards/HomePage";
// import Photoframe from "./components/dashboards/PhotoFrame";
// import Calendars from "./components/dashboards/Calendars";
// import Mobilecovers from "./components/dashboards/Mobilecovers";
import CardDetails from "./components/dashboards/CardsDetails";
import Cards from "./components/dashboards/Card";
class Routes extends Component {
  /**
   * Function that renders component view as well as defines the routes for application and route viewport
   */
  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/home" component={props => <HomePage {...props} />} />
              <Route path="/photoframes" component={props => <Cards {...props} />} />
              <Route path="/calendars" component={props => <Cards {...props} />} />
              <Route path="/mobilecovers" component={props => <Cards {...props} />} />
              <Route path="/card-details" component={props => <CardDetails {...props} />} />
              <Route path="/" component={props => <HomePage {...props} />}/>
            </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default Routes;
