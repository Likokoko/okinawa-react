const Cards = ({ businesses }) => {
  return (
    <div className="Cards">
      {businesses.map((business) => {
        return business.image_url ? (
          <div key={business.id} className="Card">
            <img
              className="cardImg"
              src={business.image_url}
              alt={business.name}
            />
            <h3>{business.name}</h3>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Cards;
