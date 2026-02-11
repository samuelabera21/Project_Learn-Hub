// function Community() {
//   return (
//     <section className="history-section">
//       <h2>Global Orthodox Community</h2>
//       <p>
//         This section will later show Orthodox populations around the world,
//         by continent and by country, using real data.
//       </p>
//     </section>
//   );
// }

// export default Community;



// import "../../styles/history/Most.css";

// /* ===== DATA (later API / JSON) ===== */
// const churches = [
//   {
//     id: 1,
//     name: "Church of St. Mary of Zion",
//     location: "Axum, Ethiopia",
//     description: "One of the oldest and most sacred churches in Orthodox Christianity.",
//     mediaType: "image", // image | video
//     mediaSrc: "", // later
//   },
//   {
//     id: 2,
//     name: "Church of the Holy Sepulchre",
//     location: "Jerusalem",
//     description: "Built on the site of Christ’s crucifixion and resurrection.",
//     mediaType: "image",
//     mediaSrc: "",
//   },
//   {
//     id: 3,
//     name: "Hagia Sophia",
//     location: "Istanbul, Turkey",
//     description: "A historical center of Orthodox Christianity.",
//     mediaType: "video",
//     mediaSrc: "",
//   },
// ];

// function Most() {
//   return (
//     <section className="history-most">
//       <h2>Most Important Orthodox Churches</h2>

//       <div className="most-grid">
//         {churches.map((church) => (
//           <div key={church.id} className="most-card">
//             <div className="most-media">
//               {church.mediaType === "image" ? (
//                 <div className="media-placeholder">Image</div>
//               ) : (
//                 <div className="media-placeholder">Video</div>
//               )}
//             </div>

//             <div className="most-content">
//               <h3>{church.name}</h3>
//               <p className="location">{church.location}</p>
//               <p>{church.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Most;






import mostOrthodoxChurches from "../../data/history/mostOrthodoxChurches";
import "../../styles/history/Most.css";

function Most() {
  return (
    <section className="history-most">
      <h2>Most Important Orthodox Churches</h2>

      <div className="most-grid">
        {mostOrthodoxChurches.map((church) => (
          <article className="most-card" key={church.id}>
            <div className="most-media">
              {church.media.type === "video" ? (
<video
  src={church.media.src}
  poster={church.media.poster}
  autoPlay
  muted
  loop
  playsInline
/>
              ) : (
                <img src={church.media.src} alt={church.name} />
              )}

              <span className="rank-badge">#{church.rank}</span>
            </div>

            <div className="most-content">
              <h3>{church.name}</h3>
              <p className="location">{church.location}</p>
              <p className="significance">{church.significance}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Most;



// import mostOrthodoxChurches from "../../data/history/mostOrthodoxChurches";
// import "../../styles/history/Most.css";

// function Most() {
//   return (
//     <section className="history-most">
//       <h2>Most Important Orthodox Churches</h2>

//       <div className="most-grid">
//         {mostOrthodoxChurches.map((church) => (
//           <article className="most-card" key={church.id}>
//   <div className="most-media">
//     {church.media.type === "video" ? (
//       <video
//         src={church.media.src}
//         poster={church.media.poster}
//         autoPlay
//         muted
//         loop
//         playsInline
//       />
//     ) : (
//       <img src={church.media.src} alt={church.name} />
//     )}

//     <span className="rank-badge">#{church.rank}</span>

//     {/* Overlay content */}
//     <div className="most-overlay">
//       <h3>{church.name}</h3>
//       <p className="location">{church.location}</p>
//       <p className="significance">{church.significance}</p>
//     </div>
//   </div>
// </article>

//         ))}
//       </div>
//     </section>
//   );
// }

// export default Most;
