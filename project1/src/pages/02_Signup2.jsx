// 02_Signup2.jsx
// 회원가입 - 환경 관심사 입력

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup2() {

  // 페이지 이동용
  const navigate = useNavigate();

  // 환경 관심사 저장
  const [interest, setInterest] = useState("");

  // 오류 메시지 저장
  const [error, setError] = useState("");

  // 시작하기 버튼 클릭
  const handleStart = () => {

    // 글자 수 검사
    if (
      interest.length < 2 ||
      interest.length > 7
    ) {
      setError("2~7자로 입력해주세요.");
      return;
    }

    // 오류 메시지 제거
    setError("");

    // 이전 회원가입 정보 가져오기
    const signupData =
      JSON.parse(
        localStorage.getItem("signupData")
      ) || {};

    // 최종 회원 정보
    const userData = {
      ...signupData,
      interest
    };

    console.log("회원가입 정보");
    console.log(userData);

    /*
      추후 Node.js 서버 연동

      axios.post(
        "http://localhost:5000/signup",
        userData
      )
    */

    // 홈 화면 이동
    navigate("/");
  };

  return (

    // 전체 화면
    <div
      style={{
        backgroundColor: "#F9F7ED",
        minHeight: "100vh",
        position: "relative",
        padding: "20px",
      }}
    >

      {/* 상단 제목 */}
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: "10px"
        }}
      >
        회원가입
      </div>

      {/* 환경 관심사 영역 */}
      <div
        style={{
          marginTop: "40px",

          //입력창 수정
          display: "flex",
          flexDirection: "column",
          alignItems : "center"
        }}
      >

        {/* 페이지 제목 */}
        <h1
          style={{
            color: "black",
            marginBottom: "100px"
          }}
        >
          환경 관심사
        </h1>

        {/* 환경 관심사 입력 */}
        <div
          style={{
            textAlign: "left",
            marginBottom: "30px",

            //width:"300px",
            //maxWidth:"100%",
            margin:"0 auto",
            
          }}
        >

          <label style={{ display: "block", marginBottom: "10px" }}>
            관심사를 작성해주세요.
          </label>

          <input
            type="text"
            placeholder="예) 텀블러"

            value={interest}
            onChange={(e) =>
              setInterest(e.target.value)
            }

            style={{
              width:"100%",
              maxWidth: "400px",
            

              padding: "10px",
              marginTop: "5px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderBottom: "1px solid #999"
            }}
          />

          {/* 입력 조건 안내 */}
          <p
            style={{
              color: "#777",
              marginTop: "5px",
              fontSize: "14px"
            }}
          >
            * 2~7자로 입력해주세요.
          </p>

        </div>

        {/* 오류 메시지 */}
        {error && (
          <p
            style={{
              color: "red"
            }}
          >
            {error}
          </p>
        )}

      </div>

      {/* 시작하기 버튼 영역 */}
      <div
        style={{
          position: "absolute",
          marginTop: "100px",
          // bottom: "200px",
          left: 0,
          width: "100%",
          textAlign: "center",
          
        }}
      >

        {/* 시작하기 버튼 */}
        <button
          onClick={handleStart}
          style={{
            width: "80%",
            maxWidth: "400px",
            backgroundColor: "#6EA1CC",
            color: "white",
            border: "none",
            padding: "15px",
            fontSize: "20px",
            // 둥글게 곡선모양 버튼 처리
            borderRadius: "50px",
            cursor: "pointer",

            
          }}
        >
          시작하기
        </button>

      </div>

    </div>

  );
}

export default Signup2;