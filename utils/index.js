const isArray = Array.isArray;

const isObject = (param) => {
  if (!param) {
    console.warn('not a valid parameter!');
    return false;
  }
  return Object.prototype.toString.call(param) === '[object Object]';
};

module.exports = {
  isArray,
  isObject,
};
