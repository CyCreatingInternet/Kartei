// Firebase Konfiguration für Karteikarten-Cloudsync
// Füge diesen Code in ein <script> Tag in deiner HTML-Datei ein, nach dem Haupt-JavaScript.
// Ersetze die Konfigurationsdaten durch deine eigenen aus der Firebase Console.

// 1. Firebase SDK einbinden (in HTML einfügen):
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>

// 2. Initialisierung und Sync-Logik:
const firebaseConfig = {
    apiKey: "DEIN_API_KEY",
    authDomain: "DEIN_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://DEIN_PROJECT_ID.firebaseio.com",
    projectId: "DEIN_PROJECT_ID",
    storageBucket: "DEIN_PROJECT_ID.appspot.com",
    messagingSenderId: "DEINE_SENDER_ID",
    appId: "DEINE_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function syncCardsToCloud(cards) {
    db.ref('users/admin/cards').set(cards);
}
function loadCardsFromCloud(callback) {
    db.ref('users/admin/cards').once('value').then(snap => {
        callback(snap.val() || []);
    });
}
// Beispiel: Nach Login laden und nach Änderungen speichern
// loadCardsFromCloud(cards => { ... });
// syncCardsToCloud(cards);
