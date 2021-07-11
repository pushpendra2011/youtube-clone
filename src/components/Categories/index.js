import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPopularVideos, getVideosByCategories } from "../../redux/actions/videos.action";
import "./_categories.scss";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "all",
    "Movie reviews",
    "Code",
    "Podcasts",
    "Music",
    "DIY",
    "Garden",
    "History",
    "UI designs",
    "Animations",
    "News",
    "Stand up comedy",
  ];

  const dispatch = useDispatch();
  const handleCategory = (newCategory) => {
    setActiveCategory(newCategory);
    if(newCategory === "all")
    dispatch(getPopularVideos());
    else
    dispatch(getVideosByCategories(newCategory));
  };
  return (
    <div className="categoriesBar">
      {categories.map((item) => (
        <span
          className={`${activeCategory === item ? "active" : ""}`}
          onClick={() => handleCategory(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Categories;
