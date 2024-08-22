const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase Admin SDK
const serviceAccount = require('../config/firebase-service-account-key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Read the JSON file
const membersData = JSON.parse(fs.readFileSync('./data/members-database.json', 'utf8'));

// Function to upload members in batches
async function uploadMembers() {
  try {
    const members = membersData.members;
    const batch = db.batch();
    let count = 0;

    for (const [slug, memberData] of Object.entries(members)) {
      const docRef = db.collection('members').doc(slug);
      batch.set(docRef, memberData);
      count++;

      // Firestore batches can only contain up to 500 operations
      if (count === 500) {
        await batch.commit();
        console.log('Batch of 500 members committed.');
        count = 0;
      }
    }

    // Commit any remaining members
    if (count > 0) {
      await batch.commit();
      console.log(`Final batch of ${count} members committed.`);
    }

    console.log('All members uploaded successfully');
  } catch (error) {
    console.error('Error uploading members:', error);
  }
}

// Run the upload
uploadMembers().then(() => {
  console.log('Upload process completed.');
  process.exit(0);
}).catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});