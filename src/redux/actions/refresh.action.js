import jwtDecode from "jwt-decode";
import { readToken } from "../../utils/token";


export const setUser = () => {
  const token = readToken();
  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      return false;
    } else {
      return true;
    }
  }
  return false;
};
