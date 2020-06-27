import React from "react";

class Person extends React.Component {
  render() {
    const { name, age, belt } = this.props;
    return (
      <div className="person">
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Belt: {belt}</h3>
      </div>
    );
  }
}

export default Person;
