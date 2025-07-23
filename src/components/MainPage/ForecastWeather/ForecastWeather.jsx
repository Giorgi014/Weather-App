import { Cart } from "../../Route/Route";
import "./ForecastWeather.scss";

const ForecastWeather = () => {
  return (
    <article className="forecast_container">
      <h2>5-Day Forecast</h2>
      <section className="days_container">
          <Cart variant="forecast_cart"></Cart>
          <Cart variant="forecast_cart"></Cart>
          <Cart variant="forecast_cart"></Cart>
          <Cart variant="forecast_cart"></Cart>
          <Cart variant="forecast_cart"></Cart>
      </section>
    </article>
  );
};

export default ForecastWeather;
