const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase Admin SDK
const serviceAccount = require('./path-to-your-service-account-key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Read the JSON file
const membersData = JSON.parse(fs.readFileSync('./path-to-your-members.json', 'utf8'));

// Function to upload a single member
async function uploadMember(member) {
  try {
    await db.collection('members').doc(member.slug).set(member);
    console.log(`Successfully uploaded member: ${member.name}`);
  } catch (error) {
    console.error(`Error uploading member ${member.name}:`, error);
  }
}

// Function to upload all members
async function uploadAllMembers() {
  for (const member of membersData.members) {
    await uploadMember(member);
  }
  console.log('Finished uploading all members');
}

// Run the upload
uploadAllMembers().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});