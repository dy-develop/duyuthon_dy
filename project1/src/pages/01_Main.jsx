// 01_Main.jsx
// 1. 텀블러 대여 시스템 메인 홈페이지

import { useNavigate } from "react-router-dom";

// 임시
import { analyzeMoveAI } from "../data/test1";
import { analyzeStockAI } from "../data/test1";

function Main() {
    const navigate = useNavigate();
    
    //임시
    const handleAnalyze = async () => {
    try {
      const result = await analyzeAI();

      console.log(result);
      alert(result);
    } catch (error) {
      console.error(error);
      alert("AI 분석 실패");
    }
  };


  return (


    // 전체 화면
    <div
      style={{

        // 배경색 흰색
        backgroundColor: "#F9F7ED",

        // 글자색 검은색
        color: "black",

        // 브라우저 전체 높이 사용
        minHeight: "100vh",

        // 가운데 정렬
        textAlign: "center",

        // 위쪽 여백
        paddingTop: "50px"
      }}
    >

      {/* 홈페이지 제목 */}
      <h1
        style={{

          // 제목 색상
          color: "black",

          // 제목 아래 여백
          marginBottom: "30px"
        }}
      >
        텀블러 대여 시스템
      </h1>

      {/* 홈페이지 설명 영역 */}
      <div
        style={{

          // 설명과 버튼 사이 거리
          marginBottom: "50px",

          // 설명 글자 크기
          fontSize: "18px"
        }}
      >

        <p>
          환경 보호를 위한 텀블러 대여 서비스입니다.
        </p>

        <p>
          가까운 대여소에서 텀블러를 빌리고 반납할 수 있습니다.
        </p>

      </div>

      {/* 버튼 영역 */}
      <div>
        {/* 회원가입 버튼 */}
        <button
          onClick={() => navigate("/signup")}
          style={{
            color: "white",
            backgroundColor: "#679DC5",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "50px",
            border: "2px #BFDDF5 solid"
          }}
        >
          회원가입
        </button>

        {/* 로그인 버튼 */}
        <button
          onClick={() => navigate("/login")}
          style={{

          color: "white",

          //버튼 색 변경
           backgroundColor: "#679DC5",

            // 버튼 크기
            padding: "10px 20px",

            // 버튼 사이 거리
            //marginRight: "20px",
            marginLeft: "20px",

            // 글자 크기
            fontSize: "16px",

            // 마우스 모양 변경
            cursor: "pointer",

            borderRadius: "50px",
            border: "2px #BFDDF5 solid"
          }}
        >
          로그인
        </button>

        <button onClick={() => navigate("/admin")}
          style={{
            color:"white",

          //버튼 색 변경
          backgroundColor: "#679DC5",

            // 버튼 크기
            padding: "10px 20px",

            // 버튼 사이 거리
            //marginRight: "20px",
            marginLeft: "20px",

            // 글자 크기
            fontSize: "16px",

            // 마우스 모양 변경
            cursor: "pointer",

            borderRadius: "50px",
            border: "2px #BFDDF5 solid"
          }}
          >
          관리자 페이지
          </button>


          


      </div>

    </div>
  )
}

// App 컴포넌트 내보내기
export default Main;

/*<button
          //임시
            onClick={handleAnalyze}
            style={{
              color: "white",
              backgroundColor: "#6EA1CC",
              padding: "10px 20px",
              marginLeft: "20px",
              fontSize: "16px",
              cursor: "pointer",

              borderRadius: "50px",
              border: "2px #BFDDF5 solid"
            }}
          >
            AI 분석
          </button>
          */