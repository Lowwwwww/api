const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\cleiton_e_correa\\Documents\\Entra_21\\perfumariaApi\\serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;
