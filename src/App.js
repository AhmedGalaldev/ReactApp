import React from "react";
import Person from "./Person";
import AddPerson from "./AddPerson";
// container component
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: "ahmed", age: 27, belt: "black" },
      { id: 2, name: "ali", age: 30, belt: "green" },
      { id: 3, name: "mohamed", age: 20, belt: "yellow" },
    ],
  };
  addPerson = (person) => {
    person.id = Math.random();
    let personsList = [...this.state.list, person];
    this.setState({
      list: personsList,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Welcome :)</p>
        <Person personsList={this.state.list} />
        <AddPerson addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
