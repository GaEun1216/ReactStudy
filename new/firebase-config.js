// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyAf8i7uuYEqOusCfsnjCsvX2MT-ewq2tTM",
    authDomain: "test-921f8.firebaseapp.com",
    projectId: "test-921f8",
    storageBucket: "test-921f8.appspot.com",
    messagingSenderId: "320684433449",
    appId: "1:320684433449:web:7207e85a411cc42af57c38",
    measurementId: "G-DM95L40522"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);