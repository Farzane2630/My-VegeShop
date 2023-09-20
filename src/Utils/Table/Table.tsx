import "./_Table.scss";

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
import { productType } from "../../Types/types";

function ProductRow(props: {
  product: productType,
  deleteFromList: Function,
  wishlist: boolean,
  addToCartHandler: Function,
  // handleDecreaseCart: Function
}) {
  return (
    <TableRow
      key={props.product.title}
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
          onClick={props.deleteFromList}
          aria-label="delete"
          size="large"
          // @ts-ignore
          color="black"
          className="delete-btn"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <div className="add-to-cart-btn" onClick={
          event => {
            event.preventDefault()
            props.addToCartHandler
          }
        }>
          {props.wishlist ? (
            <MouseOverPopover path="" PopOverTxt="ADD to CART!" target={undefined} />
          ) : (
            ""
          )}
        </div>
        <Link to={`/product-info/${props.product.id}`} className="link">
          <img src={props.product.cover} className="whishItem-img" />
        </Link>
        {props.product.title}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        ${" "}
        {props.product.discount
          ? ((props.product.price * (100 - props.product.discount)) / 100).toFixed(3)
          : props.product.price}
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        <input
          className="count-input"
        // value={}
        // onChange={(e) => setproductQuantity(props.product.id, e)}
        />
      </TableCell>
      <TableCell className="table-body-cell" align="center">
        {props.product.discount !== 0 && props.product.quantity && props.product.quantity > 1
          ? ((props.product.price * (100 - props.product.discount)) / 100) *
          props.product.quantity
          : props.product.discount !== 0 && props.product.quantity && props.product.quantity <= 1
            ? props.product.price * ((100 - props.product.discount) / 100)
            : props.product.discount === 0 && props.product.quantity && props.product.quantity > 1
              ? props.product.price * props.product.quantity
              : ""}
      </TableCell>
    </TableRow>
  );
}

export default function BasicTable(props: {
  products: productType[],
  deleteFromList: Function,
  wishlist?: boolean,
  addToCartHandler?: Function,
  // handleDecreaseCart: Function
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
          {props.products.map((product: productType) => (
            <ProductRow
              key={product.title}
              product={product}
              deleteFromList={() => props.deleteFromList(product.id)}
              wishlist={false}
              addToCartHandler={() => props.addToCartHandler && props.addToCartHandler(product.id)}
              // handleDecreaseCart={() => props.handleDecreaseCart(product.id)}
               />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
