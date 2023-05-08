// Import the IPFS library.
const ipfs = require('ipfs');

// Create a new IPFS client.
const client = new ipfs();

// Get the hash of the data that you want to share.
const hash = 'QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco';

// Share the data with other users.
client.pin(hash, {
  recursive: true
}, (err, success) => {
  if (err) {
    console.log(err);
    return;
  }

  // The data has been shared with other users.
  console.log('Data shared with other users:', hash);
});
