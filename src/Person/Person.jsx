//import React from "react";
import "./Person.css";

const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <div>
        <div className="name" >
          {name}
        </div>

        <div className="age">{age}years</div>
      </div>
    </div>
  );
};

export default Person;
