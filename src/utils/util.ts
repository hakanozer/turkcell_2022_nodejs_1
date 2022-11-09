import CryptoJS from "crypto-js";

const key = process.env.SECRET_KEY!

// Encrypt
export const encrypt = (plainText: string) : string => {
    const cipherText = CryptoJS.AES.encrypt(plainText, key).toString()
    return cipherText
}


export const decrypt = (cipherText: string) : string => {
    const bytes = CryptoJS.AES.decrypt(cipherText, key)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}
