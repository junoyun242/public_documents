import { FC } from "react";

interface PropTypes {
  subtitle: string;
  id?: string;
}

const SubTitle: FC<PropTypes> = ({ subtitle, id }) => {
  return (
    <section id={id}>
      <h2>{subtitle}</h2>
    </section>
  );
};

export default SubTitle;
