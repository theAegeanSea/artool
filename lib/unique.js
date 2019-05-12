'use strict';

const {
  isObject,
  isArray,
} = require('../utils');
/**
 * 数组去重
 * @param   {Array}  arr 
 * @param   {String} key 
 * @returns {Array}  newArray 去重后的数组
 */

function main(arr, key) {
  if (!isArray(arr)) {
    throw new Error('invalid Array!');
  }
  const newArray = [];
  arr.forEach((item) => {
    if (isObject(item)) {
      if (!key) {
        throw new Error('is type of [object Array], but cannot find <key> ');
      }
      if (newArray.findIndex((i => i[key] === item[key])) === -1) {
        newArray.push(item);
      }
    } else if (item) {
      if (newArray.indexOf(item) === -1) {
        newArray.push(item);
      }
    }
  });
  
  return newArray;
}

module.exports = main;
