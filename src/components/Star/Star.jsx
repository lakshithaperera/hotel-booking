import React from "react";
import { AiFillStar } from "react-icons/ai";
import { StarSec } from "./Star-syled";

export const Star = () => {
  return (
    <StarSec>
      <AiFillStar className="icon" />
      <AiFillStar className="icon" />
      <AiFillStar className="icon" />
      <AiFillStar className="icon" />
      <AiFillStar className="icon" />
    </StarSec>
  );
};
