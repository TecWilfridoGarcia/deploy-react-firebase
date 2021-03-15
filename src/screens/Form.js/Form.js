import React, { useState, useEffect } from "react";
import { db } from "../../fb/firebase";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Edit from '@material-ui/icons/Edit';
import AlertMessage from "../../components/AlertMessage";
import './styles.css';

const Form = ({ addOrEditProduct, currentId }) => {

  const initialStateValues = {
    name: "",
    price: "",
    stock: "",
    description: "",
  };
  
  const [values, setValues] = useState(initialStateValues);
  const [alertState, setAlertState] = useState(false);
  const [textAlertState, setTextAlertState] = useState("");

  setTimeout(() => {
    setAlertState(false)
  }, 3000);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const { name, price, stock, description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && price !== 0 && stock !== 0 && description !== "") {
        addOrEditProduct(values);
        setValues({ ...initialStateValues });
        setAlertState(true)
    }
  };

  const getProductById = async (id) => {
    const doc = await db.collection("products").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValues });
      setTextAlertState("New Product Added")
    } else {
      getProductById(currentId);
      setTextAlertState("Product Updated")
    }
  }, [currentId]);

  return (
    <>
      {alertState && <AlertMessage severity="success" text={textAlertState} />}
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          error={!values.name}
          value={values.name}
          name="name"
          onChange={handleInputChange}
        /><br />
        <TextField
          label="Price"
          error={!values.price}
          type="number"
          value={values.price}
          name="price"
          onChange={handleInputChange}
        /><br />
        <TextField
          label="Stock"
          type="number"
          value={values.stock}
          error={!values.stock}
          name="stock"
          onChange={handleInputChange}
        /><br />
        <TextField
          name="description"
          value={values.description}
          error={!values.description}
          type="text"
          multiline
          onChange={handleInputChange}
          label="Description"

          rows={4}
        /><br />

        <Button
          variant="contained"
          color="primary"
          size="small"
          type="submit"
          startIcon={currentId === "" ? <SaveIcon /> : <Edit />}
        >
          {currentId === "" ? "Save" : "Update"}
        </Button>
      </form>
    </>

  );
};

export default Form;