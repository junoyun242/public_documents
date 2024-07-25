import { FC } from "react";

interface PropTypes {
  id: string;
}

const RootCause: FC<PropTypes> = ({ id }) => {
  return (
    <section id={id} className="non-center">
      <h3>근본 원인</h3>
      <div className="two-page">
        <div className="fragment">
          <h4>골반 비대칭</h4>
          <ul>
            <li>오른쪽 골반이 올라가있음</li>
            <li>골반이 전반적으로 왼쪽으로 돌아가있음</li>
          </ul>
        </div>
        <div className="fragment">
          <h4>왼쪽 날개뼈</h4>
          <ul>
            <li>왼쪽 어깨가 올라가있음</li>
            <li>왼쪽 날개뼈가 가장 통증이 심한 곳</li>
          </ul>
        </div>
      </div>

      <div className="two-page">
        <div className="fragment">
          <h4>오른쪽 어꺠</h4>
          <ul>
            <li>오른쪽 어꺠가 앞으로 빨려있음</li>
            <li>Range of motion이 떨어지고 찝혀있는 느낌</li>
          </ul>
        </div>
        <div className="fragment">
          <h4>왼쪽 장요근</h4>
          <ul>
            <li>강하게 뭉쳐있음</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RootCause;
