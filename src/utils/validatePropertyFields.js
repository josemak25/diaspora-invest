export const validatePropertyFields = (fields) => {
  const errorFields = {};

  if (!fields.name) {
    errorFields.name = true;
  }
  if (!fields.description) {
    errorFields.description = true;
  }
  if (!fields.address) {
    errorFields.address = true;
  }
  if (!fields.location) {
    errorFields.location = true;
  }
  if (!fields.category_id) {
    errorFields.category_id = true;
  }
  if (!fields.price) {
    errorFields.price = true;
  }
  if (fields.has_C_of_O === '') {
    errorFields.has_C_of_O = true;
  }
  if (!fields.images.length) {
    errorFields.images = true;
  }

  return errorFields;
};
