import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
const Header = ( {toggleSidebar} ) => {
  return (
    <div className="header">
      <FaBars className="header__menu" size={26} onClick={toggleSidebar} />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
        alt=""
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
            <AiOutlineSearch size={22}/>
        </button>
      </form>
      <div className="header__icons">
          <MdNotifications size={28}/>
          <MdApps size={28}/>
          <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
