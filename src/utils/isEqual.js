const isEqual = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if(key1.length !== key2.length) return false;

  for (let i = 0; i < key1.length; i++) {
    const key = key1[i];
    if(obj1[key] !== obj2[key]) return false;
  }
  return true;
}

module.exports = { isEqual };
