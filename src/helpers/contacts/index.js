/**
 * Function that requests contacts from server
 * @return { promise }
 */
export const fetchContactsFromServer = () =>
  fetch('http://demo.sibers.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.log(`Возникла проблема с запросом: ${error.message}`);
    });

/**
 * compares contact name with comparable string.
 * Returns true if contactName === comparableString or if one of the parts of name is starts with comparableString.
 * Otherwise returns false.
 * @param name - contact name
 * @param comparableString - part or all of name
 * @return { boolean }
 */
export const compareNameWithString = (name, comparableString) => {
  const preparedName = name.toLowerCase().trim();
  const preparedComparableString = comparableString.toLowerCase().trim();
  return (
    preparedName === preparedComparableString ||
    preparedName
      .split(' ')
      .some(partOfContactName =>
        partOfContactName.startsWith(preparedComparableString),
      )
  );
};

/**
 * Capitalizes first letter of string
 * @param { string } str
 */
export const ucFirst = str => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};
