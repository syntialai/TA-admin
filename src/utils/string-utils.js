/**
 * Function to return English text in plural or singular
 *
 * @param {String} label
 * @param {Number} itemCount
 * @param {Boolean} separateWithSpace
 *
 * @returns {String} text in plural or singular
 */
// eslint-disable-next-line import/prefer-default-export
export const pluralText = (label, itemCount, separateWithSpace = true, includeItemCount = true) => {
  let textToReturn = `${includeItemCount ? itemCount : ''}${separateWithSpace ? ' ' : ''}${label}`;
  if (itemCount > 1) {
    textToReturn += 's';
  }
  return textToReturn;
};

/**
 * Function to format Firestore Timestamp to formatted date
 *
 * @param {Timestamp} timestamp
 * @returns {String} Full formatted date + time
 */
export const toDateString = (timestamp, includeTime = true) => {
  if (!timestamp) {
    return '';
  }

  const dateFormat = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000,
  );
  if (includeTime) {
    return `${dateFormat.toDateString()}, ${dateFormat.toLocaleTimeString()}`;
  }
  return dateFormat.toDateString();
};

/**
 * Function to format Date to formatted date in form
 *
 * @param {Date} date
 * @returns {String} formatted date in yyyy-mm-dd
 */
export const formatDate = (dateInMillis = 1000, today = false) => {
  if (!dateInMillis) {
    return null;
  }

  const date = today ? new Date() : new Date(dateInMillis);

  const day = date.getDate();
  const month = date.getMonth() > 8 ? (date.getMonth() + 1) : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

/**
 * Format String function
 *
 * @param {String} sentence
 * @returns String of Capitalized sentence
 */
export const toCapitalize = (sentence) => {
  const capitalized = sentence
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return capitalized;
};
