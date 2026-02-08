import "../styles/Home.css";

import Hero from "../components/home/Hero";
import Events from "../components/home/Events";
import Quote from "../components/home/Quote";
import Community from "../components/home/Community";
import Values from "../components/home/Values";

/*
  Home Page
  ---------
  This file ONLY:
  - Composes sections together
  - No UI details
  - No logic
*/

function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <Quote />
      <Community />
      <Values />
    </main>
  );
}

export default Home;
