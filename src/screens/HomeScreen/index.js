import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/Video";
import Categories from "../../components/Categories";
import { useEffect } from "react";
import {
  getPopularVideos,
  getVideosByCategories,
} from "../../redux/actions/videos.action";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { AiOutlineBlock } from "react-icons/ai";
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === "all") dispatch(getPopularVideos());
    else dispatch(getVideosByCategories(activeCategory));
  };
  const { videos, loading, activeCategory } = useSelector(
    (state) => state.homeVideos
  );
  return (
    <Container>
      <Categories />
      {/* {!loading && ( */}
        <InfiniteScroll
          className="row"
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
        >
          {videos.map((video) => (
            <Col key={video.id} lg={3} md={4}>
              <Video video={video} />
            </Col>
          )
          )}
        </InfiniteScroll>
      {/* )} */}
    </Container>
  );
};

export default HomeScreen;
