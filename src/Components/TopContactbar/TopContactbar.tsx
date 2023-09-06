import "./_TopContactbar.scss";

import { Box } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import Grid from '@mui/material/Unstable_Grid2';

export default function TopContactbar() {
  return (
    <Box className="topbar-contact-container">
      <Grid container>

        <Grid xs={12} md={4} className="topbar-contact-info">
          <span className="phone-icon">
            <PhoneEnabledIcon />
          </span>
          + 1235 2355 98
        </Grid>

        <Grid xs={12} md={4} className="topbar-contact-info">
          <span className="phone-icon">
            <MailIcon />
          </span>
          farzanekazemi8517@gmail.com
        </Grid>
        <Grid xs={12} md={4} className="topbar-contact-info">
          3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
        </Grid>
      </Grid>
    </Box>
  );

}
