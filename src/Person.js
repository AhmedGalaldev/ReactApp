import React from "react";
// ui component
const Person = ({ personsList }) => {
  const getList = personsList.map((person) => {
    return (
      <div className="person" key={person.id}>
        <h3>Name: {person.name}</h3>
        <h3>Age: {person.age}</h3>
        <h3>Belt: {person.belt}</h3>
      </div>
    );
  });
  return <div>{getList}</div>;
};

export default Person;
