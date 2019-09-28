import { getSessionCookie } from "../utils/cookie";

const SupportHeader = (extraMetadata) => {
  let header = {};
  const token = getSessionCookie();
  if (token) {
    header = {
      headers: {
        Authorization: `Bearer ${token}`,
        ...extraMetadata
      }
    };
  }
  return header;
};
export default SupportHeader;