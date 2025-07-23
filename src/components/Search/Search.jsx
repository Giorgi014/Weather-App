import "./Search.scss";

export const Search = () => {
  return (
    <div className="search_container">
      <input type="text" placeholder="Search for a city..." id="search" />
      <i className="fa-solid fa-magnifying-glass" id="seach_btn"></i>
      <p id="error_message">The city you are looking for does not exist.</p>
    </div>
  );
};
