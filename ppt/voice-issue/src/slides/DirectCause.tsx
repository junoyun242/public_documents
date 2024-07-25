import { FC } from "react";

interface PropTypes {
  id: string;
}

const DirectCause: FC<PropTypes> = ({ id }) => {
  return (
    <section id={id} className="non-center">
      <h3>직접적 원인</h3>

      <ol>
        <li className="fragment">왼쪽 어깨 올라감</li>
        <li className="fragment">목 돌아감</li>
        <li className="fragment">후두 긴장</li>
        <li className="fragment">턱 긴장 및 비대칭</li>
        <li className="fragment">배 찌그러짐</li>
      </ol>
    </section>
  );
};

export default DirectCause;
