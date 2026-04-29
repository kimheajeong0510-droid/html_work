
  // alert("짠")
  // console.log("자바스크립트에요")
  // 함수를 생성
  function check_sign(event){
    // 스크립트에서 변수 선언 타입
    // var : 최근에 사용 안함
    // const : 상수
    // let : 변수
    // alert("가입 단추 눌림")
    // 각 입력 상자를 변수로 등록 함.
    event.preventDefault();
    let userId = document.querySelector("#uid");
    let email = document.querySelector("#email");
    let pwd = document.querySelector("#pwd");
    let confirm = document.querySelector("#confirm");
    let path = document.querySelector("#path");
    let memo = document.querySelector("#memo");
    // 라디오 버튼
    let mail = document.getElementsByName("mail");
    let bus = document.getElementById("bus");
    let metro = document.getElementById("metro");
    let walking = document.getElementById("walking");
    // 버스가 체크 되었는지 확인
    if (bus.checked) {
      bus.value = "ok";
    } else {
      bus.value = "no";
    }

    if (metro.checked) {
      metro.value = "ok";
    } else {
      metro.value = "no";
    }

    if (walking.checked) {
      walking.value = "ok";
    } else {
      walking.value = "no";
    } 

    // email 수신 여부 확인
    let mailReceive = '메일수신 안함';
    // 값 비교는 등호 두개
    // 값과 타입 비교 등호 세개
    mail.forEach(x => {
      if (x.checked) {
        if(x.value == 'yes') {
        mailReceive = '메일수신';
      } 
      }
    });

    // 아이디 글자수 확인
    // input 상자 : uid에서 입력한 글자수 저장
    let idLength = userId.value.length;
    if (idLength < 4 || idLength > 10) {
      alert('아이디는 4자~10자 사이입니다.');
      userId.focus();
    }
    // 비밀번호 확인
    if (pwd.value !== confirm.value) {
      alert('비밀번호가 일치하지 않습니다.')
      confirm.value = '';
      pwd.focus();
    }

    let reslut = '';
    // '\n' : 개행, '\t' : tap
    reslut = reslut + '아이디 : ' + userId.value + '\n';
    reslut = reslut + '이메일 : ' + email.value + '\n';
    reslut = reslut + '비밀번호 : ' + pwd.value + '\n';
    reslut = reslut + '가입경로 : ' + path.value + '\n';
    reslut = reslut + '메모 : ' + memo.value + '\n';
    reslut = reslut + '메일수신 : ' + mailReceive + '\n';
    reslut = reslut + '버스 : ' + bus.value + '\n';
    reslut = reslut + '지하철 : ' + metro.value + '\n';
    reslut = reslut + '도보 : ' + walking.value + '\n';
    console.log(reslut)
  }
