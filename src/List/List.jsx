import React, { useState } from "react";
import ClearAllBtn from "../ClearAllBtn/ClearAllBtn";
import { people } from "../data/data";
import Person from "../Person/Person";
import "./List.css";
const List = () => {
  const [data, setData] = useState(people);
  const clearAll = () => {
    setData([]);
  };
  return (
    <div className="listContainer">
      <h2>{data.length} Birthdays today</h2>
      <div className="list">
        {data.map((person) => {
          return <Person {...person} key={person.id} />;
        })}
      </div>
      <div>
        <ClearAllBtn clearAll={clearAll} />
      </div>
    </div>
  );
};

export default List;
