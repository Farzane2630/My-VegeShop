
import Alert from "@mui/material/Alert";
import MouseOverPopover from "../Poper";

export default function ShowAlert({ variant, type, msg, cart, wishlist }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem",
        columnGap: 30,
      }}
    >
      <Alert variant={variant} severity={type}>
        {msg}
      </Alert>
      {cart ? <MouseOverPopover path="/products/1" PopOverTxt="Let`s shop!" /> : ""}
      {wishlist ? (
        <MouseOverPopover path="/products/1" PopOverTxt="Let`s select favorie products!" />
      ) : (
        ""
      )}
    </div>
  );
}
