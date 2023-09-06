import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import MouseOverPopover from "../Poper";
import { Link } from "react-router-dom";
import "./_Table.scss";
import { updateTotalPrice } from "../../Redux/Reducers/cartItems";
import { useDispatch, useSelector } from "react-redux";

function ProductRow({ product, deleteFromList, wishlist, addToCartHandler }) {
  const [quantity, setQuantity] = useState(1);
  const carttItems = useSelector((state) => state.cart);
  const setproductQuantity = (productID, e) => {
    setQuantity(e.target.value);

    carttItems.length > 0 &&
      carttItems.find((product) => {
        if (product.id === productID) {
          setNewObject(e.target.value, productID);
        }
      });
  };
  const dispatch = useDispatch();

  function setNewObject(quantity, productID) {
    const updatetProductObject = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      rate: product.rate,
      sold: product.sold,
      cover: product.cover,
      inStock: product.inStock,
      category: product.category,
      discount: product.discount,
    };
    dispatch(updateTotalPrice(productID, updatetProductObject));
  }
  return (
    <TableRow
      key={product.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        className="table-body-cell"
        component="th"
        scope="row"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "5%",
        }}
      >
        <IconButton
          onClick={deleteFromList}
          aria-label="delete"
          size="large"
          color="black"
          className="delete-btn"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <div className="add-to-cart-btn" onClick={addToCartHandler}>
          {wishlist ? (
            <MouseOverPopover path="" PopOverTxt="ADD to CART!" />
          ) : (
            ""
          )}
        </div>
        <Link to={`/product-info/${product.id}`} className="link">
          <img src={product.cover} className="whishItem-img" />
        </Link>
        {product.title}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        ${" "}
        {product.discount
          ? ((product.price * (100 - product.discount)) / 100).toFixed(3)
          : product.price}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        <input
          className="count-input"
          value={quantity}
          onChange={(e) => setproductQuantity(product.id, e)}
        />
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        {product.discount !== 0 && product.quantity > 1
          ? ((product.price * (100 - product.discount)) / 100) *
            product.quantity
          : product.discount !== 0 && product.quantity <= 1
          ? product.price * ((100 - product.discount) / 100)
          : product.discount === 0 && product.quantity > 1
          ? product.price * product.quantity
          : ""}
      </TableCell>
    </TableRow>
  );
}

export default function BasicTable({
  products,
  deleteFromList,
  wishlist,
  addToCartHandler,
}) {
  return (
    <TableContainer className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-head">
          <TableRow>
            <TableCell className="table-head-cell">
              Product name and cover{" "}
            </TableCell>
            <TableCell className="table-head-cell" align="right">
              price
            </TableCell>
            <TableCell className="table-head-cell" align="right">
              Quantity
            </TableCell>
            <TableCell className="table-head-cell" align="right">
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <ProductRow
              key={product.title}
              product={product}
              deleteFromList={() => deleteFromList(product.id)}
              wishlist={wishlist}
              addToCartHandler={() => addToCartHandler(product.id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
