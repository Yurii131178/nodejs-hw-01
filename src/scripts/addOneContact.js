import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const currentContacts = await readContacts();
  const newContact = createFakeContact();
  currentContacts.push(newContact);
  await writeContacts(currentContacts);
  console.log(`Successfully written one contact.`);
};

addOneContact();
