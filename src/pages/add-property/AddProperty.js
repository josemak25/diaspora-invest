import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function AddProperty() {
  const [images, setImages] = useState([]);

  const onDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "diaspora"); // Replace the preset name with your own
      formData.append("api_key", "539545174591145"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) || 0);

      console.log(formData.get("file"))
     for (var [key, value] of formData.entries()) {
        console.log(key, value); 
      }
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post(
          "https://api.cloudinary.com/v1_1/eoverse/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" }
          }
        )
        .then(response => {
          const data = response.data;
          const fileURL = data.secure_url; // You should store this URL for future references in your app
          console.log(data);
        }).catch(err =>{
          console.log(err)
        });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
    });
  };

  const {
    isDragActive,
    getRootProps,
    getInputProps,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true
  });

  return (
    <div className="add-properties-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
      <div className="container">
        <div className="row">
          <div className="add-property-wrap col">
            <ul className="add-property-tab-list nav mb-50">
              <li className="working">
                <a href="#basic_info" data-toggle="tab">
                  1. Basic Information
                </a>
              </li>
              <li>
                <a href="#gallery_video" data-toggle="tab">
                  2. Gallery & Video
                </a>
              </li>
              <li>
                <a href="#detailed_info" data-toggle="tab">
                  3. Detailed Information
                </a>
              </li>
            </ul>

            <div className="add-property-form tab-content">
              <div className="tab-pane show active" id="basic_info">
                <div className="tab-body">
                  <form>
                    <div className="row">
                      <div className="col-12 mb-30">
                        <label for="property_title">Property Title</label>
                        <input type="text" id="property_title" />
                      </div>

                      <div className="col-md-4 col-12 mb-30">
                        <label>Location</label>
                        <select className="nice-select">
                          <option>For Sale</option>
                        </select>
                      </div>

                      <div className="col-md-4 col-12 mb-30">
                        <label for="property_address">Address</label>
                        <input type="text" id="property_address" />
                      </div>

                      <div className="col-md-4 col-12 mb-30">
                        <label>Category</label>
                        <select className="nice-select">
                          <option>Apartment</option>
                          <option>Cafe</option>
                          <option>House</option>
                          <option>Restaurant</option>
                          <option>Store</option>
                          <option>Villa</option>
                        </select>
                      </div>

                      <div className="col-md-4 col-12 mb-30">
                        <label>Payment Duration</label>
                        <select className="nice-select">
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                          <option>Yearly</option>
                        </select>
                      </div>

                      <div className="col-md-4 col-12 mb-30">
                        <label for="property_address">
                          Average Monthly Payment <span>(USD)</span>
                        </label>
                        <input type="text" id="property_address" />
                      </div>

                      <div className="col-md-4 col-12 mb-30">
                        <label for="property_price">
                          Price <span>(USD)</span>
                        </label>
                        <input type="text" id="property_price" />
                      </div>

                      <div className="col-md-4 col-12 mb-30">
                        <label for="property_area">
                          Has Certificate of Owner <span>(SqFt)</span>
                        </label>
                        <select className="nice-select">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>

                      <div className="col-12 mb-30">
                        <label for="property_description">Description</label>
                        <textarea id="property_description"></textarea>
                      </div>
                    </div>

                    <div className="tab-body">
                      <div className="row">
                        <div className="col-12 mb-30">
                          <label>Upload Images</label>
                          <div className="container text-center mt-5">
                            <div
                              {...getRootProps()}
                              className="property-upload"
                            >
                              <input {...getInputProps()} />
                              {!isDragActive && (
                                <>
                                  <i class="pe-7s-cloud-upload" />
                                  <p>Click here or drop files to upload!</p>
                                </>
                              )}
                              {images.length > 0 && (
                                <div className="text-danger mt-2">
                                  {images.map(file => (
                                    <img
                                      alt="Preview"
                                      key={file.preview}
                                      src={file.preview}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="nav d-flex justify-content-end col-12 mb-30 pl-15 pr-15">
                        <button className="property-submit btn">
                          Add Property
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  dropzone: {}
};
