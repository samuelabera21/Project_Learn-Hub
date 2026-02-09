import { Link } from "react-router-dom";
import kidase from "../data/teachings/kidase";
import "../styles/KidaseTypes.css";

function KidaseTypes() {
  return (
    <div className="kidase-types-page">
      <h1 className="title">{kidase.title}</h1>
      <p className="description">{kidase.description}</p>

      <div className="types-grid">
        {kidase.types.map((type) => (
          <Link
            key={type.id}
            to={`/teachings/kidase/${type.id}`}
            className="type-card"
          >
            <img src={type.image} alt={type.title} />
            <h3>{type.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default KidaseTypes;
