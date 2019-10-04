import jwtDecode from 'jwt-decode';
import { readToken } from './token';

const token = readToken();

export const isUserType = (userType) => {
  if(!token){
    return false;
  }
  const { user_type = false } = jwtDecode(token);

  if(user_type === userType) return true;
  else return false;
}
