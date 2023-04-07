const { sign, verify } = require('jsonwebtoken');
const expirationDuration = '1000000h';
const publicKey = "nfb32iur32ibfqfvi3vf932bg932g932";
export const createToken = (obj) => {
    const token = sign(obj, publicKey, {
        expiresIn: expirationDuration,
        issuer: 'softDev',
        subject: '*',
        audience: 'Areeq',
    });

    return token;
}
export const verifyToken = (token) => {
    try {
        return verify(token, publicKey);
    } catch (err) {
        throw err;
    }
}
