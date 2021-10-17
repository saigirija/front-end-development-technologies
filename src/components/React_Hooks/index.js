import React from "react";
import Left from "../common_components/Left";
import Right from "../common_components/Right";
import "./React_Hooks.css";
import React_Concepts from "../../data/data.json";
import React_Hooks_Data from "../../data/data_desc.json";

const ReactHooks = () => {
  return (
    <div className="react_hooks">
      <Left
        data_item={React_Concepts.react_hooks}
        data_desc={React_Hooks_Data.react_hooks}
      />
      <Right
        data_desc={React_Hooks_Data.react_hooks}
        data_item={React_Concepts.react_hooks}
      />
    </div>
  );
};

export default ReactHooks;
