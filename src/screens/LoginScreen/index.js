import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./_login.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const handleLogin = () => {
    dispatch(login());
  };
  const history = useHistory();
  useEffect(() => {
    console.log("tokenn", accessToken);
    if (accessToken) {
    console.log("hi");

      history.push("/checkcehfsd");
    }
  }, [accessToken, history]);
  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login with Gogle</button>
        <p>Project that is consuming Youtube APIs</p>
      </div>
    </div>
  );
};

// export default ;
export default withRouter(LoginScreen)
