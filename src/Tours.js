import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <>
      {tours.map((tour) => (
        <Tour tour={tour} removeTour={removeTour} />
      ))}
    </>
  );
};

export default Tours;
