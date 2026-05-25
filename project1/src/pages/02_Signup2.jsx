//03_Signup2.jsx
//2. 회원가입 페이지 (2/2) - 이름 입력 + 백엔드 회원가입 처리
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup2() {
  const navigate = useNavigate();

  // 이름 저장
  const [name, setName] = useState("");
  
  // 오류 메시지
  const [error, setError] = useState("");
  
  // 로딩 상태 (중복 클릭 방지)
  const [isLoading, setIsLoading] = useState(false);

  // ✅ 회원가입 처리 함수 (백엔드 호출!)
  const handleSignup = async () => {
    // 빈 값 체크
    if (!name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }

    // 이전 페이지에서 저장한 정보 불러오기
    const signupData = JSON.parse(localStorage.getItem("signupData"));
    if (!signupData) {
      setError("회원가입 정보가 없습니다. 처음부터 다시 진행해주세요.");
      navigate("/signup");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // 🚀 백엔드 회원가입 API 호출
      const response = await axios.post("https://duyuthon7.onrender.com/api/auth/signup", {
        email: signupData.email,
        password: signupData.password,
        name: name
      });

      console.log("회원가입 성공:", response.data);

      // 회원가입 임시 데이터 삭제
      localStorage.removeItem("signupData");

      // 회원가입 성공 알림
      alert("회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.");

      // 로그인 페이지로 이동
      navigate("/login");

    } catch (err) {
      // ❌ 에러 처리
      console.error("회원가입 실패:", err);
      
      if (err.response) {
        // 백엔드에서 보낸 에러 메시지
        setError(err.response.data.message || "회원가입에 실패했습니다.");
      } else if (err.request) {
        // 서버 응답이 없는 경우
        setError("서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.");
      } else {
        setError("회원가입 중 오류가 발생했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F9F7ED",
        color: "black",
        minHeight: "100vh",
        paddingTop: "70px"
      }}
    >
      <h1 style={{ color: "black" }}>회원가입</h1>
      <p style={{ color: "#666" }}>마지막 단계입니다!</p>

      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
          marginTop: "50px"
        }}
      >
        {/* 이름 입력 */}
        <div style={{ textAlign: "left", marginBottom: "30px" }}>
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        {/* 오류 메시지 */}
        {error && (
          <p style={{ color: "red", marginBottom: "15px" }}>
            {error}
          </p>
        )}

        {/* 가입 완료 버튼 */}
        <button
          onClick={handleSignup}
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? "#aaa" : "#6EA1CC",
            width: "80%",
            padding: "15px",
            fontSize: "20px",
            cursor: isLoading ? "not-allowed" : "pointer",
            borderRadius: "50px",
            border: "none"
          }}
        >
          {isLoading ? "처리 중..." : "가입 완료"}
        </button>
      </div>
    </div>
  );
}

export default Signup2;