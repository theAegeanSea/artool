'use strict';

const {
  isArray,
} = require('../utils');
const unique = require('./unique');

/**
 * 数组合并去重
 * @param {Array} array1 数组
 * @param {Array} array2 数组
 * @param {String} key 根据 key 判断对象数组的重复值
 * @returns {Array} 返回合并去重后的数组
 */
function main (array1, array2, key) {
  const invalidParams = !array1
    || !array2
    || !isArray(array1)
    || !isArray(array2)
  if (invalidParams) {
    throw new Error('not a valid parameter!');
  }
  const newArray = array1.concat(array2);
  return unique(newArray, key);
}

module.exports = main;
