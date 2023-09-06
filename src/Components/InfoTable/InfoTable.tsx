import "./_InfoTable.scss";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


function customTextField (props: { className: string, label: string, placeholder?: string }) {
  return <TextField
    required
    className={props.className}
    label={props.label}
    placeholder={props.placeholder}
    id="outlined-start-adornment"
    sx={{ m: 1 }}
  />
}

export default function InputAdornments() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      className="form-container"
    >
      <div>
        {/* @ts-ignore */}
        <customTextField
          className="half-width"
          label="First name"
        />
        {/* @ts-ignore */}

        <customTextField
          className="half-width"
          label="Last name"
        />

      </div>
      <div>
        {/* @ts-ignore */}
        <customTextField
          className="full-width"
          label="Country / State"
        />

      </div>
      <div>
        {/* @ts-ignore */}
        <customTextField
          className="half-width"
          label="Street Address"
          placeholder="Hous number and street name"
        />
        {/* @ts-ignore */}

        <customTextField
          className="half-width"
          placeholder="Appartment,unit(etc):optional"
        />

      </div>
      <div>
        {/* @ts-ignore */}
        <customTextField
          className="half-width"
          label="Town City"
        />
        {/* @ts-ignore */}

        <customTextField
          className="half-width"
          label="Postcode / ZIP *"
        />

      </div>
      <div>
        {/* @ts-ignore */}
        <customTextField
          className="half-width"
          label="Phone"
        />
        {/* @ts-ignore */}

        <customTextField
          className="half-width"
          label="Email Address"
        />
        {/* @ts-ignore */}

      </div>
    </Box>
  );
}
