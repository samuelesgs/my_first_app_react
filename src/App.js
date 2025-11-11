import { Component, Fragment } from "react";
import HelloWord from "./HelloWord";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HelloWord name="Mundo Sam"/>
        <HelloWord name="International"/>
      </Fragment>
    );
  }
}

export default App;
