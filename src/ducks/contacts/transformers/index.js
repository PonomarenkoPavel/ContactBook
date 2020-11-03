/**
 * prepares contact data from server for handy usage
 * (id to string, adds firstLetterOfName field)
 */
export const prepareContact = ({ id, name, company, address, ...contact }) => {
  return {
    ...contact,
    name,
    address,
    id: `${id}`,
    company: company.name || company,
    firstLetterOfName: name.charAt(0).toUpperCase(),
    city: address.city,
  };
};

/**
 * normalizes contacts and prepares for usage in contact table
 * (prepares all contacts from array and sorts them by name)
 * creates object with shape { firstLetterOfName: ["contactId1", "contactId2", ...] }
 * @param dataArray - array of contacts
 */
export const prepareContacts = dataArray =>
  dataArray
    .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
    .reduce(
      (acc, contact) => {
        const preparedContact = prepareContact(contact);
        const contactId = preparedContact.id;
        const letter = preparedContact.firstLetterOfName;
        if (!acc.contactIdsByLetters[letter]) {
          acc.contactIdsByLetters[letter] = [];
        }
        acc.contactIdsByLetters[letter].push(contactId);
        acc.contacts[contactId] = preparedContact;
        return acc;
      },
      { contacts: {}, contactIdsByLetters: {} },
    );
