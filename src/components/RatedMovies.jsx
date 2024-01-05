import React from "react";

function RatedMovies() {
  return (
    <div className="ratedMovies">
      <div className="ratedMovies__left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="ratedMovies__title">Your rated movies</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default RatedMovies;
