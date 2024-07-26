import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/beige.css";
import RevealNote from "reveal.js/plugin/notes/notes.esm";
import "./App.css";
import TitleSlide from "./slides/TitleSlide";
import Chapter from "./slides/Chapter";
import JFKSample from "./slides/JFKSample";
import DateComp from "./components/DateComp";
import { EDate } from "./utils/constants";

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      center: false,
    });

    deckRef.current.initialize({ plugins: [RevealNote] }).then(() => {});

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div
      className="reveal"
      ref={deckDivRef}
      style={{ width: "100vw", height: "100vh" }}
    >
      <header>New York</header>
      <div className="slides">
        <TitleSlide />
        <Chapter />
        <DateComp date={EDate.first} id={EDate.first} />
        <JFKSample />
      </div>
      <footer>
        {EDate.first} ~ {EDate.fourteenth}
      </footer>
    </div>
  );
}

export default App;
