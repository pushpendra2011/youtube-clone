import firebase from "firebase/app";
import auth from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionTypes";
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
    const resp = await auth.signInWithPopup(provider);
    const accessToken = resp.credential.accessToken;
    const profileInfo = {
      name: resp.additionalUserInfo.profile.name,
      photoUrl: resp.additionalUserInfo.profile.picture,
    };
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("user", JSON.stringify(profileInfo));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profileInfo,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.meesage,
    });
  }
};

export const logout = () => async dispatch => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,
  });
  ["accessToken", "user"].map((item) => sessionStorage.removeItem(item));
};
