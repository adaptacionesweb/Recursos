// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA07Z5Zc7MWgwlP6cLvI2mCeuCbmRwVXGE",
  authDomain: "usuarios-blogger.firebaseapp.com",
  databaseURL: "https://usuarios-blogger-default-rtdb.firebaseio.com",
  projectId: "usuarios-blogger",
  storageBucket: "usuarios-blogger.appspot.com",
  messagingSenderId: "955269743444",
  appId: "1:955269743444:web:ce0b37ac96442abfddfec1"
};





// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



