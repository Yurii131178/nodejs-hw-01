import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const currentContacts = await readContacts();

  const count = currentContacts.length;

  return count;
};

console.log('Total number of contacts:', await countContacts());
