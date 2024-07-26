import { EDate } from "../utils/constants";

const Chapter = () => {
  return (
    <section className="two-page-layout">
      <h2>Chapter</h2>
      <main style={{ fontWeight: "semibold" }}>
        <div>
          <ol className="text-xs">
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
      </main>
    </section>
  );
};

export default Chapter;
