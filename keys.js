const crypto = require('crypto');
const fs = require('fs');

function generateKeyPair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
  });

  fs.writeFileSync('vansh_public.pem', publicKey.export({ type: 'pkcs1', format: 'pem' }));
  fs.writeFileSync('vansh_private.pem', privateKey.export({ type: 'pkcs1', format: 'pem' }));
  fs.writeFileSync('shreyansh_public.pem', publicKey.export({ type: 'pkcs1', format: 'pem' }));
  fs.writeFileSync('shreyansh_private.pem', privateKey.export({ type: 'pkcs1', format: 'pem' }));
}

generateKeyPair();
console.log('Key pairs generated');
