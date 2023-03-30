const Meals = () => {
  const food = [
    "./photo/20181222-IMG_0003.webp",
    "./photo/20181224-IMG_2072.webp",
    "./photo/20181225-IMG_2299.webp",
    "./photo/20191203-3C1A4279.webp",
    "./photo/20200107-3C1A9135.webp",
    "./photo/20221217-2K4A0194.webp",
    "./photo/1460994565-2037585504_n.jpg",
    "./photo/1526354585-948358194.jpg",
    "./photo/170801111708-okinawan-cuisine-taiwai-yun-flickr-creative-commons.jpg",
  ];
  return (
    <div className="meals">
      <h2 className="foodTitle">Flavor Experiences</h2>
      <div className="mealWrap">
        <img src={food[0]} alt="food" className="foods" />
        <img src={food[1]} alt="food" className="foods" />
        <img src={food[2]} alt="food" className="foods" />
        <img src={food[3]} alt="food" className="foods" />
      </div>
      <div className="foodBtn">
        <a
          className="foodBtnTitle"
          href="https://visitokinawajapan.com/travel-inspiration/flavors-of-okinawa/"
        >
          VIEW MORE
        </a>
      </div>
    </div>
  );
};

export default Meals;
