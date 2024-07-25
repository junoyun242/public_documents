import { useEffect, useRef } from "react";
import "./App.css";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/beige.css";
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
      slideNumber: true,
    });

    deckRef.current.initialize().then(() => {});

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
      <div className="slides">
        <TitleSlide />
        <Chapter />
        <DateComp date={EDate.first} id={EDate.first} />
        <JFKSample />
      </div>
    </div>
  );
}

export default App;
