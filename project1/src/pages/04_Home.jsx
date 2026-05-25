//04_Home.jsx
//4. 로그인 성공 후 홈 화면
import { useNavigate } from "react-router-dom";

import { analyzeAI } from "../data/socket";

import homeIconcolor from "../assets/symbol_home_color.svg";
import mapIcon from "../assets/symbol_map.svg";
import settingIcon from "../assets/symbol_setting.svg";
import re50Logo from "../assets/Re50_image.svg";
import borrowIcon from "../assets/symbol_borrow.svg";

/*
<button
          //AI 분석 버튼
            onClick={handleAnalyze}
            style={{
              color: "white",
              backgroundColor: "#6EA1CC",
              padding: "20px 30px",
              marginLeft: "20px",
              fontSize: "20px",
              cursor: "pointer",

              borderRadius: "50px",
              border: "2px #BFDDF5 solid",
              textAlign: "center",
              marginBottom:"20px"
            }}
          >
            AI 분석
          </button>
          */
function Home() {
  const navigate = useNavigate();

  // 추후 DB 데이터로 교체
  const useCount = 38;

  const recentHistory = [
    {
      location: "홍대입구역",
      date: "2026.11.12",
    },
    {
      location: "신촌역",
      date: "2026.11.10",
    },
  ];

  const nearbyStores = [
    "홍대입구역",
    "신촌역",
    "합정역",
  ];

  const handleAnalyze = async () => {
  try {
    const result = await analyzeAI();

    console.log(result);

    alert(result);
  } catch (error) {
    console.error("AI 분석 실패:", error);
    alert("AI 분석에 실패했습니다.");
  }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9F7ED",
        paddingBottom: "100px",

        //width: "700px", // 배경 크기
        //

      }}
    >
      {/* 상단 */}
      <div
        style={{
          padding: "20px",

          display: "flex",
          flexDirection: "column",
          // alignItems: "center"
          

        }}
        >
        <img
            src={re50Logo}
            alt="RE:50"
            style={{
            width: "180px",
            height: "auto",
            marginBottom: "10px",
            }}
          />
        <h2 style = {{ color: "black" }}>
          최근 6달 동안
          <br />
          이만큼 지구를 지켰어요!
        </h2>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p style={{ color: "black" }}>사용 기록</p>

          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", 
          }}
          >
          <h1 style={{ color: "#D65151", fontSize: "50px" }}>{useCount}</h1>
          <h1 style={{ color: "#8F919F", fontSize: "30px" }}>/50</h1>
          </div>
        </div>
      </div>

      {/* 최근 이용 내역 */}
      <div
        style={{
          padding: "20px",
          textAlign: "center"
        }}
        >
        <h3 style={{ color: "black" }}>최근 이용내역</h3>
        <div
          style={{
            display: "flex",
            //justifyContent: "center",
            gap: "15px",
            //flexWrap: "wrap",
            overflowX: "auto",
            whiteSpace: "nowrap",
            paddingBottom: "10px",
            
          }}
        >

        {recentHistory.map((item, index) => (
          <div
            key={index}
            style={{
            backgroundColor: "white",
            padding: "15px",
            //marginBottom: "10px",

              width: "200px",
              color:"#000000",
              borderRadius: "15px",

              minWidth:"220px", //카드 크기 고정
              flexShrink: 0, //카드가 줄어들지 않음
            }}
          >
            <h4 style ={{fontSize:"20px", fontStyle:"bold"}}>{item.location}</h4>
            <p>{item.date}</p>
          </div>
        ))}
    </div> {/* flex div 닫기 */}
    </div> {/* 최근 이용 내역 div 닫기 */}

      {/* 근처 대여소 */}
      <div
        style={{
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h3 style={{ color: "black" }}>근처 대여소 보기</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            //이게 가운데 정렬(중앙)으로 각 대여소 명이 오게 하는 코드
            gap: "20px",
            flexWrap: "wrap",
          }}
        >

        {nearbyStores.map((store, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",

              width: "200px",
              color:"#000000",
              fontWeight: "bold",
              fontSize: "20px",
            
              height: "120px",
              alignItems: "center",
              borderRadius: "15px",
            }}
          >
            {store}
          </div>
        ))}
      </div>
      </div> 
      {/* 여기까지 근처 대여소 보기 코드 연결됨 */}

      {/* 하단 메뉴 */}
      {/* 하단 메뉴 */}
<div
  style={{
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    maxWidth: "400px",
    backgroundColor: "#FFFFFF",
    borderRadius: "60px",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    zIndex: 100,
  }}
>
  {/* HOME */}
  <button
    onClick={() => navigate("/home")}
    style={{
      flex: 1.3,
      backgroundColor: "#D8E4EF",
      border: "none",
      borderRadius: "50px",
      padding: "8px 12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    <img
      src={homeIconcolor}
      alt="home"
      style={{
        width: "30px",
        height: "30px",
        objectFit: "contain",
      }}
    />

    <div
      style={{
        marginTop: "2px",
        fontSize: "15px",
        fontWeight: "700",
        color: "#679DC5",
      }}
    >
      HOME
    </div>
  </button>

  {/* 사용중 rent 대여 */}
  <button
    onClick={() => navigate("/map")}
    style={{
      flex: 1,
      backgroundColor: "transparent",
      border: "none",
      padding: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    <img
      src={mapIcon}
      alt="rental"
      style={{
        width: "30px",
        height: "30px",
        objectFit: "contain",
      }}
    />

    <div
      style={{
        marginTop: "2px",
        fontSize: "15px",
        color: "#6C6E7E",
        fontWeight: "600",
      }}
    >
     MAP
    </div>
  </button>

  {/* 설정 */}
  <button
    onClick={() => navigate("/setting")}
    style={{
      flex: 1,
      backgroundColor: "transparent",
      border: "none",
      padding: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    <img
      src={settingIcon}
      alt="setting"
      style={{
        width: "30px",
        height: "30px",
        objectFit: "contain",
      }}
    />

    <div
      style={{
        marginTop: "2px",
        fontSize: "15px",
        color: "#6C6E7E",
        fontWeight: "600",
      }}
    >
      MY
    </div>
  </button>

  <button
  onClick={() => navigate("/rental")}
  style={{
    width: "55px",
    height: "55px",

    borderRadius: "50%",
    border: "none",

    backgroundColor: "#6FA8DC",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    cursor: "pointer",
  }}
>
  <img
    src={borrowIcon}
    alt="대여"
    style={{
      width: "26px",
      height: "26px",
      objectFit: "contain",
    }}
  />
</button>
</div>
      </div>
  );
}

export default Home;