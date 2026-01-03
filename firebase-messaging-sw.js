importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
 apiKey: "AIzaSyC4xZjQiSaufXZgMwrdcMxBD5pPwSjw9oE",
  authDomain: "bloggerpush-1629b.firebaseapp.com",
  projectId: "bloggerpush-1629b",
  storageBucket: "bloggerpush-1629b.firebasestorage.app",
  messagingSenderId: "957209541400",
  appId: "1:957209541400:web:7484c3bab2ba6b6132fc6d",

});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
