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
            message: `Successfully added ${data.email} as an admin`
        }
    }).catch(e => {
        return e;
    });
})

exports.addTeacherRole = functions.https.onCall((data, context) => {
    // get user
    return admin.auth().getUserByEmail(data.email).then(user => {
        // add custom claim to user (admin)
        return admin.auth().setCustomUserClaims(user.uid, { teacher: true });
    }).then(() => {
        return {
            message: `Successfully added ${data.email} as a teacher`
        }
    }).catch(e => {
        return e;
    });
})