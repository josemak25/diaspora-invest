import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import { useSelector, connect } from "react-redux";

import Jumbotron from "../../common/jumbotron/Jumbotron";
import { Input, TextArea, Label } from "../../components/Input";
import Select from "../../components/select";
import Button from "../../components/Button";
import { uploaders } from "../../utils/image-uploader";

import { uploadProperty } from "../../redux/actions/add-properties.action";
import { validatePropertyFields } from "../../utils/validatePropertyFields";

const initialFormState = {
  name: "",
  description: "",
  address: "",
  location: null,
  category_id: null,
  price: "",
  has_C_of_O: null
};

const initialImageState = {
  images: [],
  imageUpload: false
};

function AddProperty(props) {
  const { categories } = useSelector(({ category }) => category);
  const { loading } = useSelector(({ addProperty }) => addProperty);

  const [imageState, setImages] = useState(initialImageState);
  const [fields, setFields] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const onDrop = files => {
    const { images } = imageState;

    setImages({ ...imageState, imageUpload: true });
    setErrors({ ...errors, images: false });

    // Once all the files are uploaded
    axios.all(uploaders(files)).then(data => {
      setImages({
        ...imageState,
        images: [...images, ...data],
        imageUpload: false
      });
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
    const newImages = imageState.images.filter(
      (image, index) => index !== +imageIndex
    );
    setImages(newImages);
  };

  const handleOnChange = ({ target }) => {
    const name = target.name;
    fields[name] = target.value;
    if (errors[name]) {
      errors[name] = false;
      setErrors({ ...errors });
    }
    setFields({ ...fields });
  };

  const handleOnSelect = ({ label, value, id }) => {
    id || id === false ? (fields[value] = id) : (fields[value] = label);
    if (errors[value]) {
      errors[value] = false;
      setErrors({ ...errors });
    }
    setFields({ ...fields });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { images } = imageState;
    const formIsValid = validatePropertyFields({ ...fields, images });

    if (Object.keys(formIsValid).length) {
      setErrors(formIsValid);
      return;
    }

    const propertyValues = { ...fields, images };

    props.uploadProperty(propertyValues);

    setFields({
      ...fields,
      ...initialFormState,
      name: "",
      location: null,
      category_id: null,
      has_C_of_O: null
    });
    setImages(initialImageState);
  };

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
                    <form onSubmit={handleSubmit} className="switch">
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
                            error={errors.name}
                          />
                        </div>

                        <div className="col-md-4 col-12 mb-30">
                          <Label htmlFor="property_title" children="Location" />
                          <Select
                            title="location"
                            options={props.states}
                            placeholder="Select the state"
                            value={fields.location}
                            onChange={handleOnSelect}
                            error={errors.location}
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
                            error={errors.address}
                          />
                        </div>

                        <div className="col-md-4 col-12 mb-30">
                          <Label
                            htmlFor="property_category"
                            children="Category"
                          />
                          <Select
                            title="category"
                            options={categories}
                            placeholder="Select Property Category"
                            value={fields.category_id}
                            onChange={handleOnSelect}
                            error={errors.category_id}
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
                            error={errors.price}
                          />
                        </div>

                        <div className="col-md-4 col-12 mb-30">
                          <Label
                            htmlFor="property_area"
                            children="Certificate of Ownership"
                          />
                          <Select
                            title="certificate of Ownership"
                            options={props.cOfO}
                            placeholder="Select the status"
                            value={fields.has_C_of_O}
                            onChange={handleOnSelect}
                            error={errors.has_C_of_O}
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
                            error={errors.description}
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
                                {!imageState.imageUpload ? (
                                  <input {...getInputProps()} />
                                ) : null}
                                {!isDragActive && (
                                  <>
                                    <i className="pe-7s-cloud-upload" />
                                    {!imageState.imageUpload ? (
                                      <p>Click here or drop files to upload!</p>
                                    ) : (
                                      <p>Uploading...</p>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                            {imageState.images.length > 0 && (
                              <div className="text-danger mt-2 property-upload-preview">
                                {imageState.images.map((url, index) => (
                                  <div
                                    key={index}
                                    data-key={index}
                                    onClick={handleImageDelete}
                                  >
                                    <span
                                      style={{ backgroundImage: `url(${url})` }}
                                    >
                                      <img
                                        alt="canel-icon"
                                        src={require("../../assets/images/icons/cancel-image.svg")}
                                      />
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {errors.images && (
                              <span className="error-message">
                                Upload atleast one image*
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {loading && (
                        <div className="nav d-flex justify-content-end col-12 mb-0 pl-15 pr-15">
                          <div
                            className="alert alert-success pb-0 pt-0"
                            role="alert"
                          >
                            Property Upload Successful !!!
                          </div>
                        </div>
                      )}
                      <div className="nav d-flex justify-content-end col-12 mb-30 pl-15 pr-15">
                        <Button
                          textContent={
                            loading || imageState.imageUpload ? (
                              <div
                                className="spinner-border text-success"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            ) : (
                              "Add Property"
                            )
                          }
                          moreStyle="property-submit"
                        />
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

export default connect(
  null,
  mapActionsToProps
)(AddProperty);

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
