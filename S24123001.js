function fxConfirm () {
    if (confirm('Okay?')) {
        alert('Thank You!');
    } else {
        alert('Okay...I see');
    }
}

// confirm창을 브라우저에 출력하고 사용자가 확인을 누르면 Thank You!를, 취소를 누르면 Okay...I see를 출력함
// confirm창은 alert와 비슷한 형태이지만, 확인 버튼만 있는 alert와 다르게 확인과 취소 버튼 두가지가 있어 선택이 가능함

function fxPrompt () {
    if (prompt('What is your name?') === ('KimDonghyun')) {
        alert('Welcome!');
    } else {
        alert('Fail');
    }
}

// prompt창은 사용자로부터 값을 받아오는 역할을 함