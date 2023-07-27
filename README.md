# Chrome Extention Momentum

소개 : 간단한 to do list를 만드는 익스텐션 클론코딩. 시간, 사용자의 거주지 날씨도 확인 기능<br>
사용 언어 : Vanila Javascript, HTML/CSS<br>
작업 기간 :2023.07.25~2023.07.26<br>

---

### background.js + quotes.js
- Math.floor, Math.random를 이용한 랜덤 이미지 백그라운드, 랜덤 명언 문구
### clock.js
- Date 객체를 사용하여 시간 정보 표현, padStart로 10이하의 분과 초는 0을 앞에 붙여 두자리 수로 표현
- setInterval로 1초에 한번씩 실행 (편의를 위해 분 단위까지만 보이게 함)
### greetings.js
- 유저의 이름으로 간단한 submit evenr가 발생하면, localStorage에 유저 정보 저장
- localStorage에 유저 정보 있을 경우 greeting message와 to do list입력창이 나옴
### todo.js
- localstorage에 유저 정보 있을 경우 to do list입력창이 나옴
- 유저가 task를 submit하면 value를 localStorage에 객체형태로 저장하며 Date.now()로 각 task에 id부여.
- localStorage에 객체가 있을 경우 to do list로 만들어 보여주며, 버튼으로 삭제 가능.
### weather.js
- openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현
- 날씨는 쉽게 알아볼 수 있는 아이콘으로 표시하며, 클릭하면 기상청 날씨누리 홈페이지에 연결되어 위치 정보 수집을 허용 시 더욱 자세히 볼 수 있다.
### reset.js
- 새로고침과 같은 기능. localStorage의 정보를 없애고 위치를 reload한다.

---
### 보완할 점
todo.js, greetings.js에서 #todo-form을 동시에 변수로 호출하는데 이를 없애고 싶다.
todo에서 export하고 greetings에서 import했더니 null이 나왔다.
변수들이 선언되는 시점에서는 아직 이들이 참조하려는 HTML 요소가 로드되지 않았을 수 있다고 한다.
코드 실행을 문서가 완전히 로드된 후로 지연시키기 위해  DOMContentLoaded 이벤트를 이용해봤으나 해결되지 않았다. 
지금은 각 파일에서 같은 요소를 다른 변수로 불러와서 썼는데 이를 통일해보고 싶다
