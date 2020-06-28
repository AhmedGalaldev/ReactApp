import React from "react";
import Person from "./Person";
// container component
class App extends React.Component {
  render() {
    this.state = {
      list: [
        { id: 1, name: "ahmed", age: 27, belt: "black" },
        { id: 2, name: "ali", age: 30, belt: "green" },
        { id: 3, name: "mohamed", age: 20, belt: "yellow" },
      ],
    };
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Welcome :)</p>
        <Person personsList={this.state.list} />
      </div>
    );
  }
}

export default App;
