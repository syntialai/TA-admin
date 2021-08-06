import firebase from 'firebase/app';

/**
 * Function to check whether a JSON object is empty
 *
 * @param {JSON} obj
 * @returns {Boolean}
 */
export const isEmptyObject = (obj) => obj || JSON.stringify(obj) === '{}';

/**
 * Function to check whether a key is exist in an object
 *
 * @param {Object} obj
 * @param {String} key
 *
 * @returns {Boolean}
 */
export const isKeyExist = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

/**
 *
 * @param {JSON} obj
 * @param {any} value
 * @returns {string|undefined} Returns string if a key with that value is found
 * and undefined otherwise
 */
export const getKeyByValue = (obj, value) => Object.keys(obj).find((key) => obj[key] === value);

/**
 * Function to copy an object
 *
 * @param {Object} newObj
 * @param {Object} oldObj
 * @returns {Object} Returns a new object with the copied value of the old object
 */
export const copyObject = (newObj, oldObj) => Object.assign(newObj, oldObj);

/**
 * Do client-side filter
 *
 * @param {Array} array
 * @param {string} keyword
 * @param {Array} fieldToFilter
 * @returns {Array} Filtered array by keyword
 */
export const filterSearch = (array, keyword, fieldToFilter) => {
  const lowerCaseKeyword = keyword.trim().toLowerCase();
  if (keyword.length <= 2) {
    return array;
  }
  const result = array.filter((data) => (
    fieldToFilter.filter((field) => data[field]
      .toLowerCase()
      .includes(lowerCaseKeyword))
      .length > 0
  ));
  console.log(result);
  return result;
};

export const nowTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();

export const toMillis = (date) => {
  if (date) {
    return new Date(date).getTime();
  }
  return null;
};
