import { Link } from "react-router-dom";
import "../styles/Teachings.css";

function Teachings() {
  return (
    <div className="teaching-page">
      {/* Background video */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Teaching/teaching.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="teaching-content">
        <h1>Teachings</h1>
        <p>Select a teaching to begin:</p>

        <div className="teaching-links">
          <Link to="/teachings/kidase">ቅዳሴ (Kidase)</Link>
          <Link to="/teachings/wereb">ወረብ (Wereb)</Link>
        </div>
      </div>
    </div>
  );
}

export default Teachings;
