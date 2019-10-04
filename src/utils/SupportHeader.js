import { readToken } from "./token";

const SupportHeader = (extraMetadata) => {
  let header = {};
  const token = readToken();
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