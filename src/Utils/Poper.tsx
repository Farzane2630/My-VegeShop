import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

export default function MouseOverPopover(props: { PopOverTxt: string, target?: string, path: string }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (_event: Event) => {
    // @ts-ignore
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={(_event) => handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {/* @ts-ignore */}
        <Link to={props.path} className="link">
          {/* @ts-ignore */}
          <IconButton color="black" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Link>
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}> {props.PopOverTxt} </Typography>
      </Popover>
    </div>
  );
}
