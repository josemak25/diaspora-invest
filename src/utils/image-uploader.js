import axios from "axios";

// Push all the axios request promise into a single array
export const uploaders= files => files.map(async file => {
  // Initial FormData
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET); // Replace the preset name with your own
  formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
  formData.append("timestamp", Date.now() / 1000 || 0);

  try {
    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    const {
      data: { secure_url }
    } = await axios.post(
      "https://api.cloudinary.com/v1_1/eoverse/image/upload",
      formData,
      {
        headers: { "X-Requested-With": "XMLHttpRequest" }
      }
    );
    return secure_url;
  } catch (err) {
    console.log(err);
  }
});
