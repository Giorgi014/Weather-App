import { Cloud, ModeBtn, Search } from "../../Route/Route";
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
      <p>Your beautiful weather companion</p>
      <Search />
    </header>
  );
};

export default Header;
