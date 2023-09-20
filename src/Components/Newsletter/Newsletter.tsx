import "./_Newsletter.scss";

import { Grid, Input, Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Newsletter() {

  const [inputValue, setInputValue] = useState<string>("")

  const handleChange = (event: Event) => {
    // @ts-ignore
    setInputValue(event.target.value)
  };

  const notify = () => {
    if (inputValue.length !== 0) {
      toast.success("Your email is submitted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("please enter your email adress!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Grid container columnSpacing={8} className="newsletter-container">
        <Grid item xs={12} sm={6}>
          <div className="landing-section-subtitle">
            Subcribe to our Newsletter
          </div>
          <div className="landing-section-details">
            Get e-mail updates about our latest shops and special offers
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="subscribe-container">
          <Input
            disableUnderline
            placeholder="Enter your email address"
            type="email"
            required
            className="subscribe-form"
            value={inputValue}
            onChange={(_event) => handleChange}
          />
          <Button
            onClick={notify}
            variant="contained"
            className="subscribe-btn"
            type="submit"
          >
            {" "}
            Subscribe{" "}
          </Button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Grid>
      </Grid>
      <div className="swipe-up">
        <button onClick={goToTop}>
          <KeyboardDoubleArrowUpIcon className="icon" />
        </button>
      </div>
    </>
  );
}
