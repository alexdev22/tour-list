import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readmore, setReadMore] = useState(false);

  return (
    <article>
      <div className="single-tour">
        <img alt="city" className="city-img" src={tour.image}></img>
        <div className="tour-title">{tour.name}</div>
        <div className="info">
          <div className="tour-info">
            {readmore ? tour.info : `${tour.info.substring(0, 200)}`}
            <button
              className="read-more"
              onClick={() => setReadMore(!readmore)}
            >
              Read More
            </button>
          </div>
          <div className="price">{tour.price}$</div>
        </div>
        <button className="delete" onClick={() => removeTour(tour.id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
