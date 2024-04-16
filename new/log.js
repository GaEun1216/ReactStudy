import { initializeApp } from 'firebase/app';

// Firebase 프로젝트 구성
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

// 데이터베이스 참조
const database = getFirestore(app);

// 사용자 추가 폼 참조
const userForm = document.getElementById('user-form');

// 사용자 정보를 데이터베이스에 추가하는 함수
function addUser(event) {
    event.preventDefault(); // 폼 기본 동작 방지

    // 폼에서 사용자 입력 가져오기
    const userId = document.getElementById('userId').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    const userAddress = document.getElementById('userAddress').value;

    // 데이터베이스에 사용자 정보 추가
    database.ref('users/' + userId).set({
        email: userEmail,
        password: userPassword,
        address: userAddress
    }).then(() => {
        console.log('사용자 정보가 성공적으로 추가되었습니다.');
        // 폼 리셋
        userForm.reset();
    }).catch(error => {
        console.error('사용자 정보 추가 중 오류가 발생했습니다:', error);
    });
}

// 사용자 추가 폼 이벤트 리스너 등록
userForm.addEventListener('submit', addUser);
