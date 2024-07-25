import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import Title from "./slides/Title";
import "./App.css";
import SubTitle from "./components/SubTitle";
import TOC from "./slides/TOC";
import VoiceStatus from "./slides/VoiceStatus";
import WhatIDid from "./slides/WhatIDid";
import DirectCause from "./slides/DirectCause";
import RootCause from "./slides/RootCause";

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
    });

    deckRef.current.initialize();

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
        <Title />
        <TOC />
        <SubTitle subtitle="Introduction" id="introduction" />
        <VoiceStatus id="voice-status" />
        <WhatIDid id="what-i-did" />
        <SubTitle subtitle="원인" id="causes" />
        <DirectCause id="direct-cause" />
        <RootCause id="root-cause" />
      </div>
    </div>
  );
}

export default App;
