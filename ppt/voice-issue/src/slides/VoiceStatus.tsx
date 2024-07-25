import { FC } from "react";

interface PropTypes {
  id: string;
}

const VoiceStatus: FC<PropTypes> = ({ id }) => {
  return (
    <section id={id} className="non-center">
      <h3>현재 목 상태</h3>
      <ol style={{ display: "flex", flexDirection: "column" }}>
        <li className="fragment">발음하기가 어려움</li>
        <li className="fragment">영어를 할 때 문제가 극대화됨</li>
        <li className="fragment">
          비슷한 소리끼리 구별해서 말하기 어려움 <i>(e.g. v and b)</i>
        </li>
        <li className="fragment">위의 문제들로 전반적으로 말하기가 어려움</li>
      </ol>
    </section>
  );
};

export default VoiceStatus;
