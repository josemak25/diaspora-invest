const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateProfileFields = values => {
  const errorFields = {};

  if (!values.name && values.name.length < 3) {
    errorFields.name = "Name is required";
  }
  if (!values.phone && values.phone.length < 11) {
    errorFields.phone = "Phone is required";
  }

  return errorFields;
};

export const validateAgencyProfileFields = (
  values,
  email = undefined,
  images = undefined
) => {
  const errorFields = {};

  if (!values.business_name) {
    errorFields.business_name = "Name is required";
  }

  if (!values.website) {
    errorFields.website = "Website is required";
  }

  if (!values.business_address) {
    errorFields.business_address = "Business_address is required";
  }

  if (!values.phone && values.phone.length < 11) {
    errorFields.phone = "A valid phone number is required";
  }

  if (email != undefined && !emailRegex.test(email)) {
    errorFields.email = "A valid email is required";
  }

  if (images != undefined && images.length < 2) {
    errorFields.images = "Please upload all required documents";
  }

  return errorFields;
};
