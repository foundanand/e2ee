const crypto = require('crypto');
const fs = require('fs');

// Load keys
const privateKey = fs.readFileSync('vansh_private.pem', 'utf8');
const encryptedMessage = 'DK7KNAfrCnN+AR/tGzzHDx77V3r3a3CRON5EfWt5mEHx/j1UjWNEVjl132lLj71ga78ZIFSkHyVKOq0z+JYWAW5gx3mNDxQ/pZAoZ/E2bnrRKTNH93pKdvJmhZjN3jJznhdU0sI9FZjtCkDf19oJ8L2id/hRqyaWa1vflAXTgbpM4bv1IKZoeU5ppD845zU1a8Lpj1mLKkkikzWp6b7w6u6zUNmbQDNAvTyJliV+7GhZpYdCa+ErGj2xCmBIa2A3+/KKqs2Ii+RasbvGE3LJ3xkYfFpfje7gkzFdOjj1zwx4Czk6Ict9mHXRyKmsFZp6kMQ3bCaXak3VbrsIldYQpw==';
try {
  // Decrypt message
  const decryptedMessage = crypto.privateDecrypt(
    {
      key: privateKey,
    },
    Buffer.from(encryptedMessage, 'base64')
  );

  console.log('Decrypted Message:', decryptedMessage.toString('utf8'));
} catch (error) {
  console.error('Decryption Error:', error);
}
