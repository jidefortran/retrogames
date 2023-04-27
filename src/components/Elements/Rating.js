import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <>
      {ratingArray.map((value, index) =>
        value ? (
          <FontAwesomeIcon key={index}
            icon={faStar} className="text-red-500 bi-star"  />
        ) : (
          <FontAwesomeIcon key={index} icon={faStar} className="text-red-200 bi-star" />
        )
      )}
    </>
  );
};
