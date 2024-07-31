import React from "react";

const Labelform = ({
  forName,
  idName,
  name,
  type,
  labelName,
  placeholderInfo,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={forName}>{labelName}</label>
      <input
        id={idName}
        name={name}
        type={type}
        placeholder={placeholderInfo}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Labelform;
