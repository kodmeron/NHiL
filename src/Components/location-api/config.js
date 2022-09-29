'use strict';
const dotenv = require('dotenv');
// const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    DATABASE_URL,
    MEASUREMENT_ID,
    APP_ID
} = process.env;

/* assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required'); */

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        messagingSenderId: MESSAGING_SENDER_ID,
        storageBucket: STORAGE_BUCKET,
        databaseURL: DATABASE_URL,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID
    }
}

