import React from "react";
import "./Person.css";
// ui component
const Person = ({ personsList, deletePerson }) => {
  const getList = personsList.map((person) => {
    if (person.age > 20) {
      return (
        <div className="person" key={person.id}>
          <h3>Name: {person.name}</h3>
          <h3>Age: {person.age}</h3>
          <h3>Belt: {person.belt}</h3>
          <button
            onClick={() => {
              deletePerson(person.id);
            }}
          >
            delete
          </button>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div>{getList}</div>;
};

export default Person;
