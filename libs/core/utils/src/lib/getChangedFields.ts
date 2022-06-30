const getChangedFields = (originalObj: any, newObj: any) => {
  const obj: any = {};
  for (const key in newObj) {
    if (newObj[key] && typeof newObj[key] === 'object') {
      // check if there is nested values
      for (const key2 in newObj[key]) {
        if (originalObj[key][key2] != newObj[key][key2]) {
          obj[key2] = newObj[key][key2];
        }
      }
    } else {
      if (newObj[key] != originalObj[key]) {
        obj[key] = newObj[key];
      }
    }
  }
  return obj;
};

export default getChangedFields;
