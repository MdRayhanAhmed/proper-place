import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search result for <b>Dhaka</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item"></div>
      </div>
    </div>
  );
}

export default Filter;
