import Hero from "../components/History/Hero";
import InEthiopia from "../components/History/InEthiopia";
import Community from "../components/History/Community";
import Most from "../components/History/Most";
import Famous from "../components/History/Famous";
import "../styles/History.css";


function History() {
  return (
    <main>
      <Hero />
      <InEthiopia />
      <Community />
      <Most />
      <Famous />
    </main>
  );
}

export default History;
