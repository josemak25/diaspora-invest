import React from "react";
import Select from "react-select";
import { useSelector } from "react-redux";

function PropertyOptions({ value, handleChange, placeholder }) {
  const { categories } = useSelector(({ category }) => category);

  return (
    <Select
      options={categories}
      defaultValue={value}
      className="custom-filter-selector fill"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default PropertyOptions;
