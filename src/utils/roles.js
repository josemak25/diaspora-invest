import jwtDecode from 'jwt-decode';
import { getSessionCookie } from './cookie';

const token = getSessionCookie();

export const isUserType = (userType) => {
  if(!token){
    return false;
  }
  const { user_type = false } = jwtDecode(token);

  if(user_type === userType) return true;
  else return false;
}
