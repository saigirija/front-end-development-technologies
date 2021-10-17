import React, { useContext } from "react";
import "./left.css";
import { ValueContext } from "../../../App";

const ListStyle = {
  fontWeight: "700",
  backgroundColor: "#312f3b",
};

const Left = ({ data_item, data_desc }) => {
  const changeState = useContext(ValueContext);
  let concept = data_desc.data[changeState.dataValue].title;
  return (
    <div className="left">
      <div className="alignment">
        <h3>{data_item.name}</h3>
        <ul>
          {data_item.concepts.map((data, index) => (
            <li
              style={concept === data ? ListStyle : { color: "white" }}
              key={index}
              onClick={() => changeState.setDataValue(index)}
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Left;
