// function InEthiopia() {
//   return (
//     <section className="history-section">
//       <h2>Orthodox Christianity in Ethiopia</h2>
//       <p>
//         This section will describe how Christianity reached Ethiopia, who introduced it,
//         and how it became deeply rooted in Ethiopian culture.
//       </p>
//     </section>
//   );
// }

// export default InEthiopia;


import "../../styles/history/InEthiopia.css";

function InEthiopia() {
  return (
    <section className="history-ethiopia">
      <div className="ethiopia-container">
        {/* Text */}
        <div className="ethiopia-text">
          <h2>Orthodoxy in Ethiopia</h2>
          <p>
            Christianity reached Ethiopia in the early centuries through
            apostolic tradition. The Ethiopian Orthodox Tewahedo Church became
            a pillar of faith, culture, and national identity.
          </p>

          <p>
            For centuries, the Church preserved scripture, tradition, and
            spiritual life, shaping Ethiopian history and civilization.
          </p>
        </div>

        {/* Image placeholder */}
        <div className="ethiopia-image">
<div className="image-box">
  <video controls width="100%" height="100%">
    <source src="/history/historyy.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

        </div>
      </div>
    </section>
  );
}

export default InEthiopia;
