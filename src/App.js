import React from "react";
import Person from "./Person";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Welcome :)</p>
        <Person name="Ahmed" age="27" belt="black" />
        <Person name="Mohamed" age="20" belt="black" />
      </div>
    );
  }
}

export default App;
