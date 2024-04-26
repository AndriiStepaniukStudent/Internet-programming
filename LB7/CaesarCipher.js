import { log, LogLevel } from './logger.js';

const CaesarCipher = {
  encrypt(message, shift) {
    return message
      .split('')
      .map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char;
      })
      .join('');
  },

  decrypt(encryptedMessage, shift) {
    return this.encrypt(encryptedMessage, 26 - shift);
  }
};

export default CaesarCipher;

log('Module CaesarCipher loaded', LogLevel.INFO);
