import isObject from './isObject';

const isEmpty = (value: unknown) => {
  if (typeof value === 'undefined' || value === null) return true;
  if (Array.isArray(value)) return value.length <= 0;
  if (isObject(value)) return Object.keys(value as object).length <= 0;
  return !value;
};

export default isEmpty;
