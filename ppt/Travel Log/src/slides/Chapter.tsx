import { EDate } from "../utils/constants";

const Chapter = () => {
  return (
    <section className="two-page-layout">
      <h2>Chapter</h2>
      <div className="text-sm content" style={{ fontWeight: "semibold" }}>
        <div>
          <ol>
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
      </div>
    </section>
  );
};

export default Chapter;
