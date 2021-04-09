## 1-1  
### 아래 CSS로 구성된 메뉴를 React JS 로 구현해 보세요. 동일한 구조를 리액트 JS로 구현합니다. create_react_app 을 사용해서 프로젝트를 만들고 아래와 동일한 효과를 구현합니다.

 - 넓이 768px 단위로 변경됩니다.

![1-1](https://user-images.githubusercontent.com/68732435/114145980-fcf13900-9951-11eb-99ae-308fa32a2306.gif)


### + 버튼과 - 버튼을 누르면 현재 페이지의 폰트 사이즈가 다이나믹하게 변화하는 페이지를 React app 으로 구현합니다. +버튼을 누르면, 텍스트의 폰트사이즈가 지속 증가합니다. - 버튼을 누르면 폰트사이즈가 지속 감소합니다. 
 
 - 우측 하단에 +,- 버튼을 누르면 폰트사이즈가 조정됩니다. 
 - 폰트 사이즈 감소는 원래 크기의 0.2배까지 감소됩니다.
 - 증가는 기존 크기 3배까지 증가됩니다.
 

![1-1_font-size](https://user-images.githubusercontent.com/68732435/114145398-4f7e2580-9951-11eb-96cc-a9e9dd0ee55a.gif)

## 2-1. Function 을 사용해서, 이용자 이름을 Props 로 받아서, 화면에 출력하는 아래 코드를 완성하세요.

- 코드

![스크린샷 2021-04-09 오후 4 51 04](https://user-images.githubusercontent.com/68732435/114147586-cc120380-9953-11eb-95d2-946bf396771c.png)

- 화면출력

![스크린샷 2021-04-09 오후 4 53 39](https://user-images.githubusercontent.com/68732435/114148011-4a6ea580-9954-11eb-8db6-4e06a49fd762.png)

## 2-2. React app 으로 아래 Pie Chart를 구현하세요.

 - server를 구축해서 mock 데이터를 만들었습니다.
 - redux saga를 통해 서버와 통신했습니다.
 - 코드

![스크린샷 2021-04-09 오후 5 03 43](https://user-images.githubusercontent.com/68732435/114149161-91a96600-9955-11eb-9e19-608f9e1b3c65.png)

- 화면 

![스크린샷 2021-04-09 오후 4 58 34](https://user-images.githubusercontent.com/68732435/114149392-d1704d80-9955-11eb-8adf-a522554c25ad.png)

- 파일 확인 방법
   - 2-2 npm i통해 node_module을 설치후 npm start를 통해서 server를 엽니다.
   - 2-2 폴더에서 npm i통해 node_module을 설치후 npm start를 통해서 확인하면 됩니다


## 2-3. React + React/Redux + Redux 로 로그인 상태 표시 UI 구현하기

 - login UI

     <img width="400" alt="login" src="https://user-images.githubusercontent.com/68732435/114158927-3630a580-9960-11eb-8f56-e8246fed059b.png">

 - profile UI

<img width="230" alt="스크린샷 2021-04-09 오후 5 59 37" src="https://user-images.githubusercontent.com/68732435/114159309-9de6f080-9960-11eb-8227-8758092c4beb.png">

 - 로그인 
   - 로그인 상황과 최대한 비슷하게 구현해봤습니다(실제 로그인 요청은 post이지만 server를 통한 mock data이용으로 구현하려다 보니 get요청으로 진행되었습니다).
   - token은 redux-persist를 통해 localstorage에 JWT_KEY관리를 하였습니다(프로퍼티명 token).
    
    <img width="400" alt="스크린샷 2021-04-09 오후 6 00 33" src="https://user-images.githubusercontent.com/68732435/114160206-a2f86f80-9961-11eb-91de-e62460e663f3.png">
     
   - 로그인 flow
   
   ![Apr-09-2021 18-27-42](https://user-images.githubusercontent.com/68732435/114160780-4184d080-9962-11eb-9f99-2363413fd918.gif)
   
   - JWT_KEY 있을 때 
   
   ![token](https://user-images.githubusercontent.com/68732435/114161222-c839ad80-9962-11eb-8896-6c6ea4e0e5ab.gif)

 - 파일 확인 방법
   - 2-3 server폴더에서 npm i통해 node_module을 설치후 npm start를 통해서 server를 엽니다.
   - 2-3 폴더에서 npm i통해 node_module을 설치후 npm start를 통해서 확인하면 됩니다
     
     
     
     
