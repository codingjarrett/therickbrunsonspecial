import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Export function used to PUT to the database
export const putDb = async (content) => {
  console.log('PUT from the database');

  // Create a connection to the J.A.T.E. database and version to be used
  const jateDB = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges
  const tx = jateDB.transaction("jate", "readwrite");

  // Open up the desired object store
  const store = tx.objectStore("jate");

  // Use the .put() method on the store and pass in the content
  const request = store.put({ jate: content });

  // Get confirmation of the request
  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
// Export function used to GET to the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the J.A.T.E. database and version to be used
  const jateDB = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges
  const tx = jateDB.transaction("jate", "readonly");

  // Open up the desired object store
  const store = tx.objectStore("jate");

  // Use the .getAll() method to get all data in the database
  const request = store.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log(result);
};

initdb();
