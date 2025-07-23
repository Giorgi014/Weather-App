import { Cart } from "../../Route/Route";
import "./TodayWeather.scss";

const TodayWeather = () => {
  return (
    <article id="searched_city_container">
      <section className="city_container">
        <div className="searched_city">
          <p id="city"></p>
          <p id="country_code"></p>
        </div>
        <div className="city_temperature">
          {/* <div className="city_weather">
          <img src="" alt="">
        </div> */}
          <div className="temperature">
            <div className="degrees">
              <p id="temperature_degrees"></p>
            </div>
            <p id="temperature_info"></p>
          </div>
        </div>
      </section>
      <section className="weather_info">
        <Cart variant="today_cart"></Cart>
        <Cart variant="today_cart"></Cart>
        <Cart variant="today_cart"></Cart>
        <Cart variant="today_cart"></Cart>
        <Cart variant="today_cart"></Cart>
      </section>
      <section className="sunrise_sunset_container">
        <Cart variant="sunrise_sunset"></Cart>
        <Cart variant="sunrise_sunset"></Cart>
      </section>
    </article>
  );
};

export default TodayWeather;
