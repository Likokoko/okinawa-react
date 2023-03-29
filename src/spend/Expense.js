import { useState,useRef } from "react";
import Fee from "./Fee";
const Expense = () => {
  const [showExpense, setShowExpense] = useState(false);
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
    <div className="expense" >
      <a href="#" className="expense-photo">
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
              src="thailand-30870.mp4"
              alt="transportation"
              muted
              autoPlay
              loop
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />

            {isHovered &&
              transportationEntries.map(([key, value]) => (
                <h2 className="here">
                  <h3 key={key} className="transportation">
                    {key} : {value}
                  </h3>
                </h2>
              ))}
          </h2>
          <h2 className="include-desc">
            <video
              muted
              autoPlay
              loop
              className="includeVid"
              src="beach-151054.mp4"
              alt="accommodation"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
            {isHovered &&
              accommodationEntries.map(([key, value]) => (
                <h3 key={key} className="accommodation">
                  {" "}
                  {key} : {value}
                </h3>
              ))}
          </h2>
          <h2 className="include-desc">
            <video
              className="includeVid"
              src="scuba-diving-699.mp4"
              alt="attractions"
              muted
              autoPlay
              loop
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
            {attractionEntries.map(([key, value]) => (
              <h3 key={key} className="attraction">
                {" "}
                {key} : {value}
              </h3>
            ))}
          </h2>
        </section>
      </a>
    </div>
  );
};
export default Expense;
