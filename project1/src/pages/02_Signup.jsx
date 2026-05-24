//02_Signup.jsx
//2. 회원가입 페이지
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  // 페이지 이동용
  const navigate = useNavigate();

// id ->사용자가 입력한 아이디 저장
// setId() ->아이디를 변경하는 함수
  // 아이디 저장
  const [id, setId] = useState("");

// 비밀번호 저장
  const [password, setPassword] = useState("");

  // 오류 메시지 상태 추가
  const [error, setError] = useState("");

  // 비밀번호 재확인 저장
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleNext = () => {
      // 비밀번호 확인
      if (password !== confirmPassword) {
        setError("비밀번호가 일치하지 않습니다.");
        return;
      }
      // 오류 제거
      setError("");

      // 회원가입 정보 임시 저장
      localStorage.setItem(
        "signupData",
        JSON.stringify({
          id,
          password
        })
      );
      // 다음 페이지 이동
      navigate("/signup2");
    };

      // 나중에 Node.js 서버로 회원가입 정보 전송
      /*
      axios.post("http://localhost:5000/signup", {
        id,
        password
      }).then(response => {
        // 회원가입 성공 시 메인 화면으로 이동
        navigate("/main");
      }).catch(error => {
        // 회원가입 실패 시 오류 메시지 표시
        setError("회원가입에 실패했습니다. 다시 시도해주세요.");
      });
      */


  return (

    <div
    // 전체 배경
      style={{
        // 배경색
        backgroundColor: "#F9F7ED",
        //입력란 위쪽 설명 글자색
        color: "black",
        // 브라우저 전체 높이 사용
        minHeight: "100vh",
        // 위쪽 여백
        paddingTop: "70px",
        // 정렬 방법(center: 가로 기준 가운데 정렬, Flex: 가로세로 가운데 정렬)
        textAlign: "Flex"
      }}
    >

      {/* 화면 제목 */}
      <h1 style={{ color: "black" }}>회원가입</h1>

      {/* 입력창들을 담는 영역 */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
          marginTop: "50px"
        }}
      >

        {/* 아이디 입력 */}
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <label>아이디(Email)</label>

          <input
            type="text"
            placeholder="사용하실 아이디를 입력하세요"
           
            value={id}
            onChange={(e) => setId(e.target.value)}

            style={{
              backgroundColor: "white",
              color: "black",
              width: "90%",
              padding: "10px",
              marginTop: "5px",

              border: "2px solid black"
            }}
          />
        </div>

        {/* 비밀번호 입력 */}
        <div style={{ textAlign: "left", marginBottom: "20px",}}>
          <label>비밀번호(6~12자의 영문 및 숫자 조합 권장)</label>

          <input
            type="password"
            placeholder="사용하실 비밀번호를 입력하세요"

            value={password}
            onChange={(e) => setPassword(e.target.value)}

            style={{
              color: "black",
              backgroundColor: "white",
              width: "90%",
              padding: "10px",
              marginTop: "5px",
              border: "2px solid black"
            }}
          />
        </div>

        {/* 비밀번호 재확인 입력 */}
        <div style={{ textAlign: "left", marginBottom: "30px" }}>
          <label>비밀번호 재확인</label>

          <input
            type="password"
            placeholder="비밀번호를 다시 입력하세요"

            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}

            style={{
              color: "black",
              backgroundColor: "white",
              width: "90%",
              padding: "10px",
              marginTop: "5px",
              border: "2px solid black"
            }}
          />
        </div>

        {/*오류 메시지*/}
        {error && (
          <p
            style={{
              color: "red",
              marginBottom: "15px"
            }}
            >
              {error}
            </p>
        )}


        {/* 다음으로 버튼 */}
        <button
          onClick={handleNext}
          style={{
            backgroundColor: "#6EA1CC",
            width: "80%",
            padding: "15px",
            fontSize: "20px",
            cursor: "pointer",

            // 버튼 둥글게
            borderRadius: "50px",
            border: "none"
          }}
        >
          다음으로
        </button>

      </div>

    </div>

  );
  }

export default Signup;