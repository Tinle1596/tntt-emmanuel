const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    // get user
    return admin.auth().getUserByEmail(data.email).then(user => {
        // add custom claim to user (admin)
        return admin.auth().setCustomUserClaims(user.uid, { admin: true });
    }).then(() => {
        return {
            message: 'Successfully added ${data.email} has been made an admin'
        }
    }).catch(e => {
        return e;
    });
})