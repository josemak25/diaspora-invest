import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { Input } from '../../components/Input';
import Button from '../../components/Button';
import { uploaders } from '../../utils/image-uploader';
import { uploadProperty } from '../../redux/actions/add-properties.action';

import '../../assets/css/account-setup.css';

const SellerSetup = ({ inputFields }) => {
  const initialImageState = {
    images: [],
    imageUpload: false
  };

  const [errors, setErrors] = useState({});
  const [imageState, setImages] = useState(initialImageState);
  const [values, setValues] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setErrors({ ...errors, [name]: '' });
    setValues({ ...values, [name]: value });
  };

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
    accept: 'image/*',
    multiple: true
  });

  const handleImageDelete = e => {
    e.preventDefault();
    const imageIndex = e.currentTarget.getAttribute('data-key');
    const newImages = imageState.images.filter((image, index) => index !== +imageIndex);
    setImages(newImages);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors({});
  };
  return (
    <div id="main-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 setup-main-contanier">
            <div className="account-setup-section section pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-10">
              <div className="container">
                {/* <!--Section Title start--> */}
                <div className="row">
                  <div className="col-md-12 mb-60 mb-xs-30">
                    <div className="account-setup-title center">
                      <h1>Welcome, Create your agency profile</h1>
                      <p>Setup, your business profile</p>
                    </div>
                  </div>
                </div>
                {/* <!--Section Title end--> */}

                {/* <!--Setup Form Business Profile start--> */}
                <form onSubmit={handleSubmit}>
                  <div className="row form-container">
                    <div className="col-12 mb-30 business-name">
                      <label htmlFor="name">Business Name</label>
                      <Input
                        name="name"
                        type="text"
                        id="name"
                        value=""
                        onChange={handleChange}
                        error={errors.name}
                        errorMessage="Name must be more than three characters"
                      />
                    </div>
                    <div className="col-12">
                      <div className="row">
                        {inputFields.map((field, i) => (
                          <div className="col-md-12 col-12 mb-30 profile-setup-input-tags" key={i}>
                            <label htmlFor="personal_email">
                              Business
                              <span>
                                {`${field.name.charAt(0).toUpperCase()}${field.name.substr(
                                  1,
                                  field.name.length
                                )}`}
                              </span>
                            </label>
                            <Input
                              name={field.name}
                              type={field.text}
                              id={field.id}
                              value=""
                              onChange={handleChange}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-12 mb-30 upload-container">
                      <label>Upload Documents</label>
                      <div className="container text-center mt-5 business-upload-container">
                        <div
                          {...getRootProps()}
                          className="property-upload business-profile-upload-container"
                        >
                          {!imageState.imageUpload ? <input {...getInputProps()} /> : null}
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
                        <div className="text-danger mt-2 property-upload-preview document-upload-preview">
                          {imageState.images.map((url, index) => (
                            <div key={index} data-key={index} onClick={handleImageDelete}>
                              <span style={{ backgroundImage: `url(${url})` }}>
                                <img
                                  alt="cancel-icon"
                                  src={require('../../assets/images/icons/cancel-image.svg')}
                                />
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      {errors.images && (
                        <span className="error-message">Upload at least one document*</span>
                      )}
                    </div>

                    <div className="col-12 mb-15 mt-0 upload-success-message">
                      <div
                        className="alert alert-success pb-0 pt-0 complete-business-profile-setup"
                        role="alert"
                      >
                        Created Business Profile Successfully !!!
                      </div>
                    </div>
                    <div className="col-12 mb-30 profile-setup-submit">
                      <Button
                        submit="submit"
                        textContent={
                          <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        }
                        moreStyle="profile-submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
              {/* <!--Setup Form Business Profile end--> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapActionsToProps = {
  uploadProperty
};

export default connect(
  null,
  mapActionsToProps
)(SellerSetup);

SellerSetup.defaultProps = {
  inputFields: [
    {
      name: 'email',
      type: 'email',
      id: 'business_email',
      errorMessage: 'Business email must be a valid email'
    },
    {
      name: 'phone',
      type: 'number',
      id: 'business_number',
      errorMessage: 'Phone number must be valid'
    },
    {
      name: 'website',
      type: 'text',
      id: 'business_website',
      errorMessage: 'Business website must be more than six characters'
    },
    {
      name: 'address',
      type: 'text',
      id: 'business_address',
      errorMessage: 'Business address must be more than six characters'
    }
  ]
};
