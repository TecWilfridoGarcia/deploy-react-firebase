
import React, { useEffect, useState } from "react";
import Form from "../Form.js/Form";
import { db } from "../../fb/firebase";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import './styles.css';
import Navbar from "../Navbar/Navbar";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import AlertMessage from "../../components/AlertMessage";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 650,
  },
}));

const Home = () => {

  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [open, setOpen] = useState(false);
  const [alertState, setAlertState] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setCurrentId("")
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getProducts = async () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    });
  };

  const onDeleteProduct = async (id) => {
    if (window.confirm("are you sure you want to delete this product?")) {
      await db.collection("products").doc(id).delete();
      setAlertState(true)
      setTimeout(() => {
        setAlertState(false)
      }, 3000);
    }

  };

  useEffect(() => {
    getProducts();
  }, []);

  const addOrEditProduct = async (productObject) => {
    setOpen(true)
    try {
      if (currentId === "") {
        setCurrentId("");
        await db.collection("products").doc().set(productObject);
      } else {
        setOpen(true)
        await db.collection("products").doc(currentId).update(productObject);
        setTimeout(() => {
          setOpen(false)
          setCurrentId("");
        }, 3000);

      }
    } catch (error) {
      console.error(error, "error");
    }
  };

  const EditProd = async (id) => {
    setCurrentId("");
    setCurrentId(id);
    setOpen(true)
  }

  return (
    <>
      {alertState && <AlertMessage severity="success" text="Product Removed Successfully" />}
      <Navbar />
      <div className="wrapper">
        <button type="button" className="button-add" onClick={handleOpen}>
          +
            </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="wrapper-form">
            <Form {...{ addOrEditProduct, currentId, products }} />
          </div>
        </Modal>{products.length < 1 ? <div>Sin Productos</div> :
          <div className="wrapper-table">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Stock</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Delete</TableCell>
                    <TableCell align="right">Update</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell>
                        {product.name}
                      </TableCell>
                      <TableCell align="right">{product.price}</TableCell>
                      <TableCell align="right">{product.stock}</TableCell>
                      <TableCell component="th" scope="row">{product.description}</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="delete" onClick={() => onDeleteProduct(product.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="delete" onClick={() => EditProd(product.id)}>
                          <Edit />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        }

      </div>
    </>

  );
};

export default Home;