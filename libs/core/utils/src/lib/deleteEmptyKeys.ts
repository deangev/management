import isEmpty from './isEmpty';

const deleteEmptyKeys = (object: { [key: string]: any }) => {
  if (typeof object !== 'object') return null;
  const newObject = { ...object };

  Object.keys(newObject).forEach((key) => {
    if (isEmpty(newObject[key])) {
      delete newObject[key];
    }
  });
  return newObject;
};

export default deleteEmptyKeys;
