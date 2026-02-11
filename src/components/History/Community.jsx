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


import "../../styles/history/Community.css";
import topOrthodoxCountries from "../../data/history/topOrthodoxCountries";


function Community() {
  return (
    <section className="countries-section">
  <h3>Top Orthodox Countries Worldwide</h3>

  <div className="country-grid">
    {topOrthodoxCountries.map((country) => (
      <article className="country-card" key={country.id}>
        {/* Media */}
<div className="country-media">
  {country.media.type === "video" ? (
    <video
      src={country.media.src}
      poster={country.media.poster}
      autoPlay
      muted
      loop
      playsInline
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  ) : (
    <img
      src={country.media.src}
      alt={country.name}
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  )}
</div>


        {/* Info */}
        <div className="country-info">
          <span className="country-rank">#{country.rank}</span>
          <h4>{country.name}</h4>

          <p className="church-name">
            {country.statistics.primaryChurch}
          </p>

          <ul className="country-stats">
            <li>
              <strong>Orthodox:</strong>{" "}
              {country.statistics.totalOrthodox.toLocaleString()}
            </li>
            <li>
              <strong>Population:</strong>{" "}
              {country.statistics.percentageOfPopulation}%
            </li>
          </ul>

          <p className="country-description">
            {country.description}
          </p>
        </div>
      </article>
    ))}
  </div>
</section>

  );
}

export default Community;
