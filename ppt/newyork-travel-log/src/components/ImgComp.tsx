import { FC, ReactNode } from "react";

interface PropTypes {
  title: string;
  children: ReactNode;
}

const ImgComp: FC<PropTypes> = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="img-list">{children}</div>
    </section>
  );
};

export default ImgComp;
