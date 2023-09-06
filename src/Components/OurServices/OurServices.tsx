
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import "./_OurServices.scss";
import { stateType } from "../../Types/types";

export default function OurServices(props: { about: boolean }) {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = useSelector((state: stateType) => state.services);
  return (
    <Box className={`${props.about ? "about" : ""}`}>
      <Grid container className="grid-container">
        {services.map((data: { bg: string, url: string, title: string, detail: string }) => (
          // @ts-ignore
          <Grid item className="grid-item" xs={12} sm={3} wrap="no-wrap">
            <div
              className="icon-container"
              style={{ backgroundColor: `${data.bg}` }}
            >
              <img src={data.url} alt="" className="icon" />
            </div>
            <div className="script-container">
              <p className="title">{data.title}</p>
              <p className="description">{data.detail}</p>
            </div>
          </Grid>
        ))}
      </Grid>

      {props.about ? (
        <div className="about-swipe-up">
          <button onClick={goToTop}>
            <KeyboardDoubleArrowUpIcon className="icon" />
          </button>
        </div>
      ) : (
        ""
      )}
    </Box>
  );
}
