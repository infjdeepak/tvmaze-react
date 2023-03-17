import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetail, resetState } from "../redux/slice/detail/showDetailSlice";

import TicketModal from "../components/showdetail/TicketModal";

const ShowDetail = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.showDetail);

  //useeffect
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchDetail(id))
      .unwrap()
      .then(() => {
        setIsLoading(false);
        console.log("succeeded");
      })
      .catch((error) => setIsError(error.message));

    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  if (isError) {
    return <h2 className="wrapper">{isError}</h2>;
  } else if (isLoading) {
    return <h2 className="wrapper">Loading...</h2>;
  }
  return (
    <>
      {toggleModal ? (
        <TicketModal show={show} setToggleModal={setToggleModal} />
      ) : (
        <section className="wrapper detail-section">
          <h1>{show?.name?.toUpperCase()}</h1>
          <div className="show-info">
            <img src={show?.image?.medium} alt={show?.name} />
            <div className="info">
              <h5>
                Title: <span>{show?.name}</span>
              </h5>
              <h5>
                Rating: <span>{show?.rating?.average}</span>
              </h5>
              <h5>
                Type: <span>{show?.type}</span>
              </h5>
              <h5>
                Genres:
                {show?.genres?.map((genre, i) => (
                  <span key={i}> {genre}, </span>
                ))}
              </h5>
              <button onClick={() => setToggleModal(true)}>Book ticket</button>
            </div>
          </div>
          <div className="summary">
            <h2>Summary</h2>
            <p dangerouslySetInnerHTML={{ __html: show?.summary }}></p>
          </div>
        </section>
      )}
    </>
  );
};

export default ShowDetail;
