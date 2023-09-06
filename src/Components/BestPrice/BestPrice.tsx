
import "./_BestPrice.scss";

import { Link } from "react-router-dom";
import { CountdownTimer } from "../CounDown/CounDownTimer";
import { useSelector } from "react-redux";
import { stateType } from "../../Types/types"

export default function BestPrice() {

  const bestPrice = useSelector((state: stateType) => state.bestPrice);

  // day counter
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div
      className="container-fluid best-price-container"
      style={{ backgroundImage: `url(${bestPrice.bgUrl})` }}
    >
      <div className="text-container">
        <p className="landing-section-title">Best Price For You</p>
        <p className="landing-section-subtitle">Deal of the day</p>
        <p className="landing-section-details">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <Link to="" className="link product-container">
        <h3 className="product-title">{bestPrice.productTitle}</h3>
        <div className="price-container">
          <span className="prev-price">${bestPrice.price}</span>
          <span className="present-price">now only ${(bestPrice.price * (100 - bestPrice.discount)) / 100} </span>
        </div>
      </Link>
      <div className="counter">
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </div>
  );
}
