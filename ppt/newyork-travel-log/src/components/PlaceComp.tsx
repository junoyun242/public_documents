import { FC, ReactNode } from "react";
import StarRating from "./StarRating";

interface PropTypes {
  name: string;
  rating?: number;
  subtitle?: string;
  address: string;
  date: string;
  time: string;
  imgUrl: string;
  imgWidth: number;
  imgHeight?: number;
  id?: string;
  children: ReactNode;
}

const PlaceComp: FC<PropTypes> = ({
  name,
  rating,
  subtitle,
  address,
  date,
  time,
  imgUrl,
  imgWidth,
  imgHeight,
  id,
  children,
}) => {
  return (
    <section className="two-page-layout" id={id}>
      <h2>
        {name} {typeof rating !== "undefined" && <StarRating rating={rating} />}
      </h2>
      {subtitle && <h3>{subtitle}</h3>}
      <div className="meta-data">
        <p>{address}</p>
        <p>
          {date} {time}
        </p>
      </div>
      <main>
        <div className="text-xs">{children}</div>
        <div>
          <img width={imgWidth} height={imgHeight} src={imgUrl} />
        </div>
      </main>
    </section>
  );
};

export default PlaceComp;
