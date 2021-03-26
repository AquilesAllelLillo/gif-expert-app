import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevenir funcionamiento por defecto formulario
    if (inputValue.trim().length > 2) {
      props.setcategories((cats) => [...cats, inputValue]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};

export default AddCategory;
