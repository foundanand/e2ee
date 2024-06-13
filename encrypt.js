const crypto = require('crypto');
const fs = require('fs');

const publicKey = fs.readFileSync('vansh_public.pem', 'utf8');
const message = 'Hello, Vansh! Please bring food on the way back.';

const encryptedMessage = crypto.publicEncrypt(publicKey, Buffer.from(message));

console.log('Encrypted Message:', encryptedMessage.toString('base64'));
