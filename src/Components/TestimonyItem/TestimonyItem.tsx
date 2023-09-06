
import { Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import "./_TestimonyItem.scss";

export default function TestimonyItem(props: { msg: string, name: string, src: string }) {
  return (
    <Container className="testimony-container">
      <div className="photo-container">
        <img src={props.src} alt="" className="customer-img" />
        <div className="qoute-icon">
          <FormatQuoteIcon className="icon" />
        </div>
      </div>

      <div className="body">
        <div className="testimony-txt">{props.msg}</div>
      </div>

      <div className="name">{props.name}</div>
    </Container>
  );
}
