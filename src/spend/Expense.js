import { useState } from "react";
import Fee from "./Fee";
const Expense = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [transportationEntries, setTransportationEntries] = useState(
    Object.entries(Fee.transportation)
  );
  const [attractionEntries, setAttractionsEntries] = useState(
    Object.entries(Fee.attractions)
  );
  const [accommodationEntries, setAccommodation] = useState(
    Object.entries(Fee.accommodation)
  );
  function handleHover() {
    setIsHovered(true);
  }
  function handleLeave() {
    setIsHovered(false);
  }

  return (
    <div className="Expense">
      {/* ref={expenseRef} 如何帶入Expense component? 曾試過const Expense = forwardRef((props, ref) => {傳遞母層props但顯示component not function
});*/}
      <a href="#" className="expense-photo ">
        <h1 className="include">Expense include</h1>
        <p className="desc">
          Experience the raw natural beauty and rich cultural heritage of
          Okinawa, from the castle ruins and heritage sites of the main island
          to the secluded coves, vibrant reefs, and clear waters of the Kerama
          and Yaeyama islands. Discover Okinawa at your own pace, island by
          island, moment by moment.
        </p>
        <section className="include-type">
          <h2 className="include-desc">
            <video
              className="includeVid"
              src="./video/thailand-30870.mp4"
              alt="transportation"
              muted
              autoPlay
              loop
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />{" "}
            {isHovered && (
              <div className="feeItems">
                {transportationEntries.map(([key, value]) => (
                  <h2 className="transportationFee">
                    <h3
                      key={key}
                      className="feeItem"
                      style={{ fontSize: "14px" }}
                    >
                      {key} : {value}
                    </h3>
                  </h2>
                ))}
              </div>
            )}
          </h2>

          <h2 className="include-desc">
            <video
              muted
              autoPlay
              loop
              className="includeVid"
              src="./video/beach-151054.mp4"
              alt="accommodation"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />

            {isHovered && (
              <div className="feeItems">
                {accommodationEntries.map(([key, value]) => (
                  <h3
                    key={key}
                    className="feeItem"
                    style={{ fontSize: "14px" }}
                  >
                    {" "}
                    {key} : {value}
                  </h3>
                ))}
              </div>
            )}
          </h2>
          <h2 className="include-desc">
            <video
              className="includeVid"
              src="./video/scuba-diving-699.mp4"
              alt="attractions"
              muted
              autoPlay
              loop
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />

            {isHovered && (
              <div className="feeItems">
                {attractionEntries.map(([key, value]) => (
                  <h3
                    key={key}
                    className="feeItem"
                    style={{ fontSize: "14px" }}
                  >
                    {" "}
                    {key} : {value}
                  </h3>
                ))}
              </div>
            )}
          </h2>
        </section>
      </a>
    </div>
  );
};
export default Expense;
