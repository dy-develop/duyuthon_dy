// 03_Login.jsx
//3. 로그인 페이지

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  // 페이지 이동용
  const navigate = useNavigate();

  // 아이디 저장
  const [id, setId] = useState("");

  // 비밀번호 저장
  const [password, setPassword] = useState("");

  // 오류 메시지 저장
  const [error, setError] = useState("");

  // 성공 메시지 저장
  const [success, setSuccess] = useState("");

  // 시작하기 버튼 클릭
  const handleLogin = () => {

    // 임시 로그인 정보 (추후 데이터베이스 연동시 변경)
    const correctId = "admin";
    const correctPassword = "2468";

    // 검사
    if (
      id === correctId &&
      password === correctPassword
    ) {

      // 오류 제거
      setError("");
      // 성공 메시지 설정
      setSuccess("로그인에 성공했습니다!");

      setTimeout(() => {
        // 메인 화면 이동
        navigate("/home");
      }, 2000);


    } else {

      // 오류 메시지 출력
      setError("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }
  };

  return (

    <div
      style={{
        backgroundColor: "#F9F7ED",
        minHeight: "100vh",
        //paddingTop: "50px",
        //paddingLeft: "30px",
        //paddingRight: "30px"
        
        // 전체 화면 가운데 정렬 코드
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",  //세로 배치
        alignItems: "center"  //모든 요소 가운데 정렬
      }}
    >

      {/* 제목 */}
      <div style={{ width: "100%", maxWidth: "450px" }}>
        <h1 style={{fontSize:"40px", color: "black", marginBottom: "30px" }}>
          RE:50과 가장 쉽게
        </h1>

        <h1 style={{fontSize:"40px", color: "black", marginBottom: "30px" }}>
          지속가능 실천을
        </h1>
        
        <h1 style={{fontSize:"40px", color: "black", marginBottom: "20px" }}>
          시작해볼까요?
        </h1>
      </div>

      {/* 설명 */}
      <p
        style={{
          color: "black"
        }}
      >
        환경효과는 50회부터 쌓여요.
        <br />
        RE:Fifty는 그 시작을 가장 쉽게 만들어줘요.
      </p>

      {/* 입력 영역 */}
      <div
        style={{
          marginTop: "50px",
          width: "100%",
          maxWidth:"450px"

        }}
      >

        {/* 아이디 */}
        <div
          style={{
            marginBottom: "25px"
          }}
        >

          <label style= {{ display: "block"}}>아이디</label>
        

          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              
              color:"black",
              backgroundColor: "white",
              border: "2px solid black",

              boxSizing: "border-box"

            }}
          />

        </div>

        {/* 비밀번호 */}
        <div>

          <label style= {{ display: "block"}}>비밀번호</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",

              color:"black",
              backgroundColor: "white",
              border: "2px solid black",

              boxSizing:"border-box"
            }}
          />

        </div>

      </div>

      {/* 오류 메시지 */}
      {error && (

        <p
          style={{
            color: "red",
            marginTop: "20px"
          }}
        >
          {error}
        </p>

      )}
      {/* 성공 메시지*/}
      {success && (
        <p
          style={{
            color: "green",
            marginTop: "20px"
       }}
       >
        {success}
      </p>
    )}

      {/* 시작하기 버튼 */}
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          maxWidth:"450px",

          padding: "15px",
          marginTop: "50px",
          backgroundColor: "#6EA1CC",
          color: "white",
          border: "none",
          borderRadius: "50px",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        시작하기
      </button>

    </div>

  );
}

export default Login;