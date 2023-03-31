import { useEffect, useState } from "react";

const Meals = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const food = [
    "./photo/20181222-IMG_0003.webp",
    "./photo/20181224-IMG_2072.webp",
    "./photo/20181225-IMG_2299.webp",
    "./photo/20191203-3C1A4279.webp",
    "./photo/20200107-3C1A9135.webp",
    "./photo/20221217-2K4A0194.webp",
    "./photo/1460994565-2037585504_n.jpg",
    "./photo/bbqShop.jpg",
    "./photo/bread.webp",
    "./photo/fresh-seafood-okinawa.jpg",
    "./photo/grsjsjKI.webp",
    "./photo/hamburger.webp",
    "./photo/1524723991-1862d33ee11b84138ff5e44ff1542dfc.jpg",
    "./photo/48204012936_c9475cb7e1_c.jpg",
    "./photo/batch____P1040972.jpg",
    "./photo/Okinawa-food-沖繩-美食-料理-推薦.jpg",
    "./photo/okinawagourmet_102.jpg",
    "./photo/pixta_12247872_M.jpg",
    "./photo/sum_fish_vs_meat.jpg",
    "./photo/沖繩美食-幸福鬆餅-1024x837.jpg",
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
      
  //     setCurrentPhoto((oldPhoto) => (oldPhoto + 1) % food.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [food.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((oldPhoto) => {
        if (oldPhoto + 1 >= food.length) {
          return 0;
        } else if (food.length - (oldPhoto + 1) <= 4) {
          return oldPhoto + 1 - (food.length - 4);
        } else {
          return oldPhoto + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [food.length]);

  const itemsToShow = 4;
  const startIndex = currentPhoto;
  const endIndex = currentPhoto + itemsToShow;

  const items = food
    .slice(startIndex, endIndex)
    .map((item, index) => (
      <img
        src={item}
        alt="food"
        className="foods foodImg"
        key={startIndex + index}
      />
    ));

  return (
    <div className="meals">
      <h2 className="foodTitle animate__animated animate__bounce animate__delay-4s">
        Flavor Experiences
      </h2>
      <h3 className="foodsub">
        For centuries Okinawa has been a melting pot, a confluence of cultures
        coming together to create something completely unique. This is reflected
        in many aspects of life and culture in Okinawa, but perhaps is best
        represented in its food. If you are doing a little island hopping, here
        are 10 street foods that you simply have to try!
      </h3>
      <div className="mealWrap animate__animated animate__pulse animate__delay-4s">
        {items}
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
