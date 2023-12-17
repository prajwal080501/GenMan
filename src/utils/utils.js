import crypto from "crypto";
function encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(key), iv);
  const encrypted = Buffer.concat([
    cipher.update(text, "utf-8"),
    cipher.final(),
  ]);
  return encrypted.toString("hex");
}

// Decryption function
function decrypt(encryptedText, key, iv) {
  const decipher = crypto.createDecipheriv("aes-256-ctr", Buffer.from(key), iv);
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedText, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString("utf-8");
}

export { encrypt, decrypt };