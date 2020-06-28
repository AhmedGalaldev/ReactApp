import React from "react";
// ui component
const Person = ({ personsList }) => {
  // const getList = personsList.map((person) => {
  //   if (person.age > 20) {
  //     return (
  //       <div className="person" key={person.id}>
  //         <h3>Name: {person.name}</h3>
  //         <h3>Age: {person.age}</h3>
  //         <h3>Belt: {person.belt}</h3>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  return (
    <div>
      {personsList.map((person) => {
        return person.age > 20 ? (
          <div className="person" key={person.id}>
            <h3>Name: {person.name}</h3>
            <h3>Age: {person.age}</h3>
            <h3>Belt: {person.belt}</h3>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Person;
