import { useState } from "react";
import Fee from "./Fee";
const Expense = () => {
  const [showFullExpense, setShowFullExpense] = useState(true);
  const [transportationEntries, setTransportationEntries] = useState(
    Object.entries(Fee.transportation)
  );
  const [attractionEntries, setAttractionsEntries] = useState(
    Object.entries(Fee.attractions)
  );
  const [accommodationEntries, setAccommodation] = useState(
    Object.entries(Fee.accommodation)
  );
  return (
    <div className="expense">
      <a href="#" class="expense-photo">
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
            <img src="peach.webp" alt="transportation" />
            {transportationEntries.map(([key, value]) => (
              <h3 className="transportation">{key}</h3>
            ))}
          </h2>
          <h2 className="include-desc">
            <img src="stay2.webp" alt="accommodation" />
            {accommodationEntries.map(([key, value]) => (
              <h3 className="accommodation">{key}</h3>
            ))}
          </h2>
          <h2 className="include-desc">
            <img src="bigboat.jpg" alt="attractions" />
            {attractionEntries.map(([key, value]) => (
              <h3 className="attraction">{key}</h3>
            ))}
          </h2>
        </section>
        ;
      </a>

      <a href="https://visitokinawajapan.com/" target="_blank" id="author">
        通往神之島的海中道路
      </a>
    </div>
  );
};
export default Expense;
