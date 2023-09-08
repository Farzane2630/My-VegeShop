import "./_InfoTable.scss";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


function CustomTextField (props: { className: string, label: string, placeholder?: string }) {
  return (
    <TextField
      required
      style={{ height: 'fit-content !important' }}
      className={props.className}
      label={props.label}
      placeholder={props.placeholder}
      id="outlined-start-adornment"
      sx={{ m: 1 }}
    />
  )
}

export default function InputAdornments() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", height: 'fit-content !important' }}
      className="form-container"
    >
      <div>
        <CustomTextField
          className="half-width"
          label="First name"
        />

        <CustomTextField
          className="half-width"
          label="Last name"
        />

      </div>
      <div>
        <CustomTextField
          className="full-width"
          label="Country / State"
        />

      </div>
      <div>
        <CustomTextField
          className="half-width"
          label="Street Address"
          placeholder="Hous number and street name"
        />

        <CustomTextField
          className="half-width"
          label=""
          placeholder="Appartment,unit(etc):optional"
        />

      </div>
      <div>
        <CustomTextField
          className="half-width"
          label="Town City"
        />

        <CustomTextField
          className="half-width"
          label="Postcode / ZIP *"
        />

      </div>
      <div>
        <CustomTextField
          className="half-width"
          label="Phone"
        />

        <CustomTextField
          className="half-width"
          label="Email Address"
        />

      </div>
    </Box>
  );
}
