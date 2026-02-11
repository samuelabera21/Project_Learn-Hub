// function Hero() {
//   return (
//     <section className="history-section">
//       <h2>Origin of Orthodox Christianity</h2>
//       <p>
//         This section will later describe the origin of the Orthodox Church.
//         Background video and rich content will be added later.
//       </p>
//     </section>
    
//   );
// }

// export default Hero;

import "../../styles/history/Hero.css";
function Hero() {
  return (
    <section className="history-hero">
      {/* Background video */}
      <video
        className="history-hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/history/history.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="history-hero-overlay" />

      {/* Content */}
      <div className="history-hero-content">
        <h1>Ethiopian Orthodox Tewahedo Church</h1>
        <p>
          A faith rooted in apostolic tradition, history, and spiritual life
          passed through generations.
        </p>
      </div>
    </section>
  );
}

export default Hero;
