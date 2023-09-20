
import Alert from "@mui/material/Alert";
import MouseOverPopover from "../Poper";

interface propTypes {
  variant: string,
  type: string,
  msg: string,
  cart: boolean,
  wishlist: boolean
}

export default function ShowAlert(props: propTypes) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem",
        columnGap: 30,
      }}
    >
      {/* @ts-ignore */}
      <Alert variant={props.variant} severity={props.type}>
        {props.msg}
      </Alert>
      {props.cart ? <MouseOverPopover path="/products/1" PopOverTxt="Let`s shop!" target={undefined} /> : ""}
      {props.wishlist ? (
        <MouseOverPopover path="/products/1" PopOverTxt="Let`s select favorie products!" target={undefined} />
      ) : (
        ""
      )}
    </div>
  );
}
