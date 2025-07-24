import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts, null, 2); // для #красоти

  try {
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('contacts are successfully written to file');
  } catch (error) {
    console.log('File writing error', error);
    throw error;
  }
};
