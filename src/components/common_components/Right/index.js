import React, { useContext } from "react";
import "./right.css";
import { ValueContext } from "../../../App";

const Right = ({ data_desc, data_item }) => {
  const data_value = useContext(ValueContext);
  let data_item_value = data_desc.data[data_value.dataValue];

  const nextPage = () => {
    data_value.setDataValue((e) => e + 1);
    window.scroll(0, 0);
  };
  const prevPage = () => {
    data_value.setDataValue((e) => e - 1);
    window.scroll(0, 0);
  };

  const handleChangeValue = (e) => {
    data_value.setDataValue(parseInt(e.target.value));
  };

  console.log(data_value.dataValue);
  return (
    <div className="right">
      <div className="menu_list">
        <select onChange={handleChangeValue} value={data_value.dataValue}>
          {data_item.concepts.map((list, index) => (
            <option value={index} key={list}>
              {list}
            </option>
          ))}
        </select>
      </div>
      <h2>{data_item_value?.title}</h2>
      <p>{data_item_value?.Description}</p>
      {data_item_value?.concepts?.map((data_concepts, index) => (
        <div key={index}>
          <h3 className="concept_name">{data_concepts.concept_name}</h3>
          <p>{data_concepts.concept_desc}</p>
          {data_concepts.steps.map((data, index) => (
            <div key={index}>
              <h4>{data.step}</h4>
              <p>{data.step_desc}</p>
              {data.img_url.map((img_data, index) => (
                <img src={img_data} alt={data.step_desc} key={index} />
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className="change_content">
        {data_value.dataValue > 0 && (
          <button onClick={prevPage}>&larr; &nbsp;Prev</button>
        )}
        {data_value.dataValue < data_item.concepts.length - 1 && (
          <button onClick={nextPage}>Next &nbsp; &rarr;</button>
        )}
      </div>
    </div>
  );
};

export default Right;
