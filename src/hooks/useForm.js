import { useState, useReducer } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const [inputValues, setInputValues] = useReducer(
    (values, newValues) => ({ ...values, ...newValues }),
  );

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
    setInputValues({ [target.name]: target.value, })
  };

  return [values, handleInputChange, reset];
};