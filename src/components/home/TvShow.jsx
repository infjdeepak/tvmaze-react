import { Link } from "react-router-dom";

const TvShow = ({ show }) => {
  return (
    <Link to={`/show/${show?.id}`} className="tvshow-card">
      <div className="tvshow-card-img">
        <img src={show?.image?.medium} alt={show?.name} />
      </div>
      <div className="tvshow-card-info">
        <h4>{show?.name}</h4>
        <p title="Rating">{show?.rating?.average}</p>
      </div>
    </Link>
  );
};

export default TvShow;
