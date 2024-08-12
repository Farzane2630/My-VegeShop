import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Grid, TextField, Button } from "@mui/material";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./_Contact.scss";
import { stateType } from "../../Types/types";

function Contact() {
  const bg = useSelector((state: stateType) => state.bgUrl);
  const contactInfo = useSelector((state: stateType) => state.contact);

  //map
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {
      name: ""
    },
  });

  // @ts-ignore
  const onMarkerClick = (props, marker, event) =>
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  // @ts-ignore
  const onMapClicked = (props) => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        // @ts-ignore
        activeMarker: null,
      });
    }
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  // onclick handler
  const sendMessageHandler = () => {
    toast.success("Your massage has been sent successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div style={{ backgroundColor: "#f7f6f2" }}>
      <Header />

      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home CONTACT US </p>
          <h1 className="product-title">CONTACT US</h1>
        </SwiperSlide>
      </Hero>
      <Grid
        container
        className="contact-info-container"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <Grid className="contact-info" item xs={12} md={6} lg={3}>
          <div className="contact-div">
            <span>Address:</span>
            <div className="contact-address">{contactInfo.address}</div>
          </div>
        </Grid>
        <Grid className="contact-info" item xs={12} md={6} lg={3}>
          <div className="contact-div">
            <span> Phone: </span>
            {contactInfo.phone}
          </div>
        </Grid>
        <Grid className="contact-info" item xs={12} md={6} lg={3}>
          <div className="contact-div">
            <span>Email: </span>
            {contactInfo.email}
          </div>
        </Grid>
        <Grid className="contact-info" item xs={12} md={6} lg={3}>
          <div className="contact-div">
            <span>Website: </span>
            {contactInfo.website}
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        className="map-contactform"
        style={{ backgroundColor: "#f7f6f2" }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          className="google-map"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {/* @ts-ignore */}
          <Map
            google={window.google}
            onClick={onMapClicked}
            containerStyle={containerStyle}
          >
            {/* @ts-ignore */}
            <Marker onClick={onMarkerClick} name={"Current location"} />
{/* @ts-ignore */}
            <InfoWindow
              // @ts-ignore
              marker={state.activeMarker}
              visible={state.showingInfoWindow}
            >
              <div>
                <h1>{state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </Grid>
        <Grid item xs={12} lg={6} className="contact-form-container">
          <TextField
            label={"Your Name"}
            id="margin-normal"
            margin="normal"
            fullWidth
          />
          <TextField
            label={"Your Email"}
            id="margin-normal"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label={"Subject"}
            id="margin-normal"
            margin="normal"
            fullWidth
          />

          <textarea
            className="msg-txtaria"
            // @ts-ignore
            minRows={3}
            placeholder="Message"
            required
          />
          <Button
            variant="contained"
            color="success"
            className="order-btn send-btn"
            onClick={sendMessageHandler}
          >
            <Link to="" className="link">
              Send Message
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Footer about={false} />
    </div>
  );
}

export default GoogleApiWrapper({
  // @ts-ignore
  API_KEY: "AIzaSyC27CF9OshutKTUzV7pKXlkjiCz3vFju7M",
})(Contact);
