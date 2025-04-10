import React from "react";

export default function CustomeInput({
  checkingErr,
  inputErr,
  regex,
  error,
  placeholder,
  onchange,
  value,
}) {
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={onchange}
        value={value}
        error={error}
        regex={regex}
        style={{ border: "3px solid black", borderRadius: "8px" , padding:"8px" , margin:"5px" ,fontSize:"20px",fontWeight:"bold"}}
      />
      {value === "" && error ? <p style={{ color: "red",fontSize:"20px",fontWeight:"bold"}}>{inputErr}</p> : ""}

      {value !== "" && !regex.test(value) && error ? (<p style={{ color: "red",fontSize:"20px",fontWeight:"bold"}}>{checkingErr}</p>) : ""}
    </>
  );
}
