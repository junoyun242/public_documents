import { EDate } from "../utils/constants";

const Chapter = () => {
  return (
    <section className="two-page-layout">
      <h2>Chapter</h2>
      <div className="content" style={{ fontWeight: "semibold" }}>
        <ol className="text-sm">
          <li>
            <a href={`#/${EDate.first}`}>{EDate.first}</a>
          </li>
          <ol>
            <li>
              <a href="#/JFK">JFK Airport</a>
            </li>
          </ol>
        </ol>
      </div>
    </section>
  );
};

export default Chapter;
