import fs from 'fs';
import https from 'https';

const saveDocumentToDisk = url => {
  const folderPath = '/Users/download';
  console.log(fs);

  //     const file = fs.createWriteStream(localPath);
  //   https.get(url, response => {
  //     response.pipe(file);
  //   });
};

export default saveDocumentToDisk;
