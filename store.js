// Import the IPFS library.
const ipfs = require('ipfs');

// Create a new IPFS client.
const client = new ipfs();

// Add some data to the IPFS network.
const data = {
  name: 'John Doe',
  age: 25
};

client.add(data, (err, hash) => {
  if (err) {
    console.log(err);
    return;
  }

  // The data has been added to the IPFS network.
  console.log('Data added to IPFS:', hash);
});
