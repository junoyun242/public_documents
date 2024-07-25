import { FC } from "react";

interface PropTypes {
  id: string;
}

const WhatIDid: FC<PropTypes> = ({ id }) => {
  return (
    <section id={id} className="non-center">
      <h3>현재까지 시도해본 것들</h3>
      <ol style={{ display: "flex", flexDirection: "column" }}>
        <li>
          <b>PT</b>
          <ul>
            <li>1년전 약 20회</li>
            <li>현재 15회쯤 진행 중</li>
          </ul>
        </li>
        <li>
          <b>Pilates</b>
          <ul>
            <li>20회</li>
          </ul>
        </li>
        <li>
          <b>물리치료</b>
          <ul>
            <li>11회</li>
          </ul>
        </li>
        <li>
          <b>발성수업</b>
          <ul>
            <li>약 10회</li>
          </ul>
        </li>
      </ol>
      <h3 style={{ paddingTop: "10px", color: "red" }}>
        위 방법들로 아무런 진전이 없었음.
      </h3>
    </section>
  );
};

export default WhatIDid;
