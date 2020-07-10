import React from 'react'
import Intro from './component/intro/Intro'
import Internships from "./component/internships/Internships"
import LensCertificate from './component/internships/Lens.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div>
    <Intro />
    <Internships />
    <Switch>
      <Route exact path = "/Lens-Certificate">
        <LensCertificate />
      </Route>
    </Switch>

      
    </div>
    </Router>
  )
}

export default App
