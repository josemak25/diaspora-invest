import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import { useSelector, connect } from 'react-redux';

import Jumbotron from "../../common/jumbotron/Jumbotron";
import { Input, TextArea, Label } from "../../components/Input";
import Select from "../../components/select";

import {  uploadProperty } from '../../redux/actions/add-properties.action';

function AddProperty(props) {
  const { categories } = useSelector(({ category }) => category);

  const [images, setImages] = useState([]);
  const [fields, setFields] = useState({
    name: "",
    description: "",
    address: "",
    location: "",
    category_id: "",
    price: "",
    has_C_of_O: ""
  });

  useEffect(() => {
    return () => {};
  }, [images]);

  const onDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(async file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "diaspora"); // Replace the preset name with your own
      formData.append("api_key", "539545174591145"); // Replace API key with your own Cloudinary key
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

    // Once all the files are uploaded
    axios.all(uploaders).then(data => {
      setImages([...data]);
    });
  };

  const { isDragActive, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true
  });

  const handleImageDelete = e => {
    e.preventDefault();
    const imageIndex = e.currentTarget.getAttribute("data-key");
    const newImages = images.filter((image, index) => index !== +imageIndex);
    setImages(newImages);
  };

  const handleOnChange = ({ target }) => {
    const name = target.name;
    fields[name] = target.value;
    setFields({ ...fields });
  };

  const handleOnSelect = ({ label, value, id }) => {
    (id || id === 0) ? (fields[value] = id) : (fields[value] = label);
    setFields({ ...fields });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const propertyValues = { ...fields, images };

    props.uploadProperty(propertyValues);

  }

  return (
    <div id="main-wrapper">
      <Jumbotron
        origin="Add Properties"
        originTitle="Properties"
        path="add-properties"
        pathTitle="Add Properties"
      />

      <div className="add-properties-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="add-property-wrap col">
              <div className="add-property-form tab-content">
                <div className="tab-pane show active" id="basic_info">
                  <div className="tab-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-12 mb-30">
                          <Label
                            htmlFor="property_title"
                            children="Property Title"
                          />
                          <Input
                            type="text"
                            name="name"
                            value={fields.name}
                            id="property_title"
                            onChange={handleOnChange}
                          />
                        </div>

                        <div className="col-md-4 col-12 mb-30">
                          <Label htmlFor="property_title" children="Location" />
                          <Select
                            options={props.states}
                            placeholder="Select the state"
                            value={fields.location}
                            onChange={handleOnSelect}
                          />
                        </div>

                        <div className="col-md-4 col-12 mb-30">
                          <Label
                            htmlFor="property_address"
                            children="Address"
                          />
                          <Input
                            type="text"
                            name="address"
                            value={fields.address}
                            id="property_address"
                            onChange={handleOnChange}
                          />
                        </div>

                        <div className="col-md-4 col-12 mb-30">
                          <Label
                            htmlFor="property_category"
                            children="Category"
                          />
                          <Select
                            options={categories}
                            placeholder="Select Property Category"
                            value={fields.category_id}
                            onChange={handleOnSelect}
                          />
                        </div>

                        <div className="col-md-4 col-12 mb-30">
                          <Label
                            htmlFor="property_price"
                            children="Price (USD)"
                          />
                          <Input
                            type="text"
                            name="price"
                            value={fields.price}
                            id="property_address"
                            onChange={handleOnChange}
                          />
                        </div>

                        <div className="col-md-4 col-12 mb-30">
                          <Label
                            htmlFor="property_area"
                            children="Has Certificate of Ownership"
                          />
                          <Select
                            options={props.cOfO}
                            placeholder="Select the status"
                            value={fields.has_C_of_O}
                            onChange={handleOnSelect}
                          />
                        </div>

                        <div className="col-12 mb-30">
                          <Label
                            htmlFor="property_description"
                            children="Description"
                          />
                          <TextArea
                            id="property_description"
                            name="description"
                            value={fields.description}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>

                      <div className="tab-body">
                        <div className="row">
                          <div className="col-12 mb-30">
                            <label>Upload Images</label>
                            <div className="container text-center mt-5 property-upload-container">
                              <div
                                {...getRootProps()}
                                className="property-upload"
                              >
                                <input {...getInputProps()} />
                                {!isDragActive && (
                                  <>
                                    <i className="pe-7s-cloud-upload" />
                                    <p>Click here or drop files to upload!</p>
                                  </>
                                )}
                              </div>
                            </div>
                            {images.length > 0 && (
                              <div className="text-danger mt-2 property-upload-preview">
                                {images.map((url, index) => (
                                  <div
                                    key={index}
                                    data-key={index}
                                    onClick={handleImageDelete}
                                  >
                                    <span
                                      style={{ backgroundImage: `url(${url})` }}
                                    >
                                      <img
                                        alt="canel-image"
                                        src={require("../../assets/images/icons/cancel-image.svg")}
                                      />
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="nav d-flex justify-content-end col-12 mb-30 pl-15 pr-15">
                        <button className="property-submit btn">
                          Add Property
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapActionsToProps = {
  uploadProperty
};


export default connect(null, mapActionsToProps)(AddProperty);

AddProperty.defaultProps = {
  states: [
    { value: "location", label: "Abia" },
    { value: "location", label: "Adamawa" },
    { value: "location", label: "Anambra" },
    { value: "location", label: "Akwa Ibom" },
    { value: "location", label: "Bauchi" },
    { value: "location", label: "Bayelsa" },
    { value: "location", label: "Benue" },
    { value: "location", label: "Borno" },
    { value: "location", label: "Cross River" },
    { value: "location", label: "Delta" },
    { value: "location", label: "Ebonyi" },
    { value: "location", label: "Enugu" },
    { value: "location", label: "Edo" },
    { value: "location", label: "Ekiti" },
    { value: "location", label: "FCT - Abuja" },
    { value: "location", label: "Gombe" },
    { value: "location", label: "Imo" },
    { value: "location", label: "Jigawa" },
    { value: "location", label: "Kaduna" },
    { value: "location", label: "Kano" },
    { value: "location", label: "Katsina" },
    { value: "location", label: "Kebbi" },
    { value: "location", label: "Kogi" },
    { value: "location", label: "Kwara" },
    { value: "location", label: "Lagos" },
    { value: "location", label: "Nasarawa" },
    { value: "location", label: "Niger" },
    { value: "location", label: "Ogun" },
    { value: "location", label: "Ondo" },
    { value: "location", label: "Osun" },
    { value: "location", label: "Oyo" },
    { value: "location", label: "Plateau" },
    { value: "location", label: "Rivers" },
    { value: "location", label: "Sokoto" },
    { value: "location", label: "Taraba" },
    { value: "location", label: "Yobe" },
    { value: "location", label: "Zamfara" }
  ],
  cOfO: [
    { value: "has_C_of_O", label: "Yes", id: true },
    { value: "has_C_of_O", label: "No", id: false }
  ],

  paymentDuration: [
    { value: "payment_duration", label: "One off" },
    { value: "payment_duration", label: "Weekly" },
    { value: "payment_duration", label: "Monthly" },
    { value: "payment_duration", label: "Yearly" }
  ]
};
