// import { fileURLToPath } from 'node:url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const PATH_DB = path.resolve(__dirname, '../db/db.json');

// import path from 'node:path';
// export const PATH_DB = path.join('src', 'db', 'db.json');

import path from 'node:path';
export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
