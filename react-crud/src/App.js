import React, { Component } from "react"
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Agents from "./pages/Agents"
import Numbers from "./pages/Numbers"
import Default from "./pages/Default"
import Header from "./sections/Header"

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment > 
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/agent/:id" component={Agents} />
            <Route exact path="/calls/:number" component={Numbers} />
            <Route component={Default} />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
      