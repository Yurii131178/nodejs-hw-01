import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();

    if (currentContacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }

    const updatedContacts = currentContacts.slice(0, -1);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log('Error while last Contact removal', error);
  }
};

removeLastContact();
