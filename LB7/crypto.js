import CryptoJS from 'crypto-js';

const message = 'Hello, world!';
const secretKey = 'MySecretKey';

const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
console.log('Encrypted message:', encryptedMessage);

const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
console.log('Decrypted message:', decryptedMessage);
