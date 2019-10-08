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

export const validateAgencyProfileFields = values => {
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
    errorFields.phone = "Phone is required";
  }

  return errorFields;
};
