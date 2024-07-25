import { FC } from "react";

interface PropTypes {
  date: string;
  id?: string;
}

const DateComp: FC<PropTypes> = ({ date, id }) => {
  return (
    <section className="centered-layout" id={id}>
      <div>
        <h2>{date}</h2>
      </div>
    </section>
  );
};

export default DateComp;
