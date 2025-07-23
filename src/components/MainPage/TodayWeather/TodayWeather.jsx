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
    </article>
  );
};

export default TodayWeather;
