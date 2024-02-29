import React from "react";
import "./index.scss"

const SelectComponent: React.FC = () => {
  return (
    <div className="select-container">
      <select className="select-content" name="categoria" id="1">
        <option
          className="select-content__option"
          value="1">
          Refeição
        </option>
        <option
          className="select-content__option"
          value="2">
          Sobremesa
        </option>
        <option
          className="select-content__option"
          value="3">
          Bebida
        </option>
      </select>
    </div>
  );
};

export default SelectComponent;


