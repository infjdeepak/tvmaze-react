import { useEffect, useState } from "react";

import TvShow from "./TvShow";

import { useSelector, useDispatch } from "react-redux";
import { fetchShows } from "../../redux/slice/tvshow/tvShowSlice";

const TvShowList = () => {
  const [visible, setVisible] = useState(10);
  const dispatch = useDispatch();
  const { shows, status, error } = useSelector((state) => state.tvShow);

  //event handle
  const handleLoadMore = () => {
    setVisible((prev) => prev + 10);
  };

  //useeffect
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchShows());
    }
  }, [dispatch, status]);

  if (error) {
    return <h2>{error.message}</h2>;
  } else if (status === "loading") {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="tvshow-list">
      {shows.slice(0, visible).map((show) => (
        <TvShow show={show} key={show.id} />
      ))}
      <button onClick={handleLoadMore} disabled={visible === 250 && true}>
        Load More
      </button>
    </div>
  );
};

export default TvShowList;
