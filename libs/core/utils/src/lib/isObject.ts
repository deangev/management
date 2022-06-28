const isObject = (value: unknown) => {
  return !Array.isArray(value) && value === Object(value);
};

export default isObject;
