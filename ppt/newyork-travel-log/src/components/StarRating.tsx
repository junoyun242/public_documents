import { FC } from "react";
import StarBright from "../assets/star-bright.svg";
import StarDark from "../assets/star-dark.svg";
interface PropTypes {
  rating: number;
}

const StarRating: FC<PropTypes> = ({ rating }) => {
  return (
    <div style={{ display: "inline", fontSize: "20px", marginTop: "auto" }}>
      <span>
        <img src={rating > 0 ? StarBright : StarDark} width={30} />
      </span>
      <span>
        <img src={rating > 1 ? StarBright : StarDark} width={30} />
      </span>
      <span>
        <img src={rating > 2 ? StarBright : StarDark} width={30} />
      </span>
      <span>
        <img src={rating > 3 ? StarBright : StarDark} width={30} />
      </span>
      <span>
        <img src={rating > 4 ? StarBright : StarDark} width={30} />
      </span>
    </div>
  );
};

export default StarRating;
