import { useState } from "react";

const Dropdown = () => {
  const [data, setData] = useState("");
  return (
    <section className="Dropdown">
      <div className="DropUl">
        <button className="Dropli">Full Iternery</button>
        <button className="Dropli">Fee</button>
        <button className="Dropli">Food</button>
        <button className="Dropli">Fun</button>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-film"></i>
      </div>
    </section>
  );
};

export default Dropdown;
