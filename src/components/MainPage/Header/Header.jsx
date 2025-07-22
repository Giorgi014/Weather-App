import { Cloud, ModeBtn } from "../../Route/Route";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <section className="mode_container">
        <ModeBtn />
      </section>
      <div className="head">
        <img src={Cloud} alt="cloud icon" className="cloud_icon" />
        <h1>Weather Now</h1>
      </div>
    </header>
  );
};

export default Header;
