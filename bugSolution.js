// bugSolution.js

const database = firebase.database();

const userId = 'someUserId';

database.ref(`users/${userId}`).once('value', (snapshot) => {
  const userData = snapshot.val();
  // Safely access displayName using optional chaining and nullish coalescing
  const displayName = userData?.displayName ?? 'Unknown User';
  console.log('User display name:', displayName);
  // Handle other fields similarly
  const email = userData?.email ?? 'No email provided';
  console.log('User email:', email);
});