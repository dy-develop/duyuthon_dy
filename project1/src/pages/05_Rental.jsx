// 05_Rental.jsx
// 현재 대여중 화면

import { useNavigate } from "react-router-dom";

import homeIcon from "../assets/symbol_home.svg";
import mapIconcolor from "../assets/symbol_map_color.svg";
import settingIcon from "../assets/symbol_setting.svg";
import re50Logo from "../assets/Re50_image.svg";

function Rental() {
  const navigate = useNavigate();

  const useCount = 38;

  // 현재 대여중 정보
  const currentRental = {
    time: "3시간전",
    location: "홍대입구역",
    deposit: "보증금 15,000원",
  };

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

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9F7ED",
        paddingBottom: "100px",
      }}
    >
      {/* 상단 */}
      <div style={{ padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
       }}>

        <img
          src={re50Logo}
          alt="RE50"
          style={{
            width: "180px",
            marginBottom: "20px",
            display: "block"
          }}
        />

        {/* 현재 대여 카드 */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "25px",
            overflow: "hidden",
            marginBottom: "30px",

            width:"80%",
            maxWidth:"500px",
            alignSelf:" center"
          }}
        >
          {/* 시간 */}
          <div
            style={{
              backgroundColor: "#D65151",
              color: "white",
              padding: "10px 15px",
              fontSize: "14px",
            }}
          >
            {currentRental.time}
          </div>

          {/* 내용 */}
          <div
            style={{
              padding: "20px",
            }}
          >
            <h2
              style={{
                color: "black",
                marginBottom: "10px",
              }}
            >
              {currentRental.location}
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8F919F",
              }}
            >
              <span>{currentRental.deposit}</span>
              <span>상세내역 보기 &gt;</span>
            </div>
          </div>
        </div>

        {/* 사용기록 */}
        <p style={{ color: "black", fontWeight:"bold", fontSize:"20px", alignSelf:" center" }}>
          사용 기록
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            alignSelf: "center",
            width: "100%",
          }}
        >
          <h1
            style={{
              color: "#D65151",
              fontSize: "50px",
              
            }}
          >
            {useCount}
          </h1>

          <h1
            style={{
              color: "#8F919F",
              fontSize: "30px",
            }}
          >
            /50
          </h1>
        </div>
      </div>

      {/* 최근 이용내역 */}
      <div
        style={{
          padding: "20px",
        }}
      >
        <h3 style={{ color: "black", fontSize:"20px" }}>
          최근 이용내역
        </h3>

        <div
          style={{
            display: "flex",
            gap: "15px",
            overflowX: "auto",
          }}
        >
          {recentHistory.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                minWidth: "200px",
                padding: "20px",
                borderRadius: "15px",
                color: "black",
              }}
            >
              <h4>{item.location}</h4>

              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 근처 대여소 */}
      <div
        style={{
          padding: "20px",
        }}
      >
        <h3 style={{ color: "black" }}>
          근처 대여소 보기
        </h3>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {nearbyStores.map((store, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                width: "180px",
                height: "120px",
                borderRadius: "15px",
                padding: "20px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {store}
            </div>
          ))}
        </div>
      </div>

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
          <img src={homeIcon} alt="" style={{
        width: "30px",
        height: "30px",
        objectFit: "contain",
      }} />
          <div style={{
        marginTop: "2px",
        fontSize: "15px",
        color: "#6C6E7E",
        fontWeight: "600",
      }}>HOME</div>
        </button>

        {/* 대여 활성 */}
        <button
          onClick={() => navigate("/rental")}
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
          <img src={mapIconcolor} alt="" style={{
        width: "30px",
        height: "30px",
        objectFit: "contain",
      }}/>
          <div style={{
        marginTop: "2px",
        fontSize: "15px",
        fontWeight: "700",
        color: "#679DC5",
      }}>대여</div>
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
          <img src={settingIcon} alt="" style={{
        width: "30px",
        height: "30px",
        objectFit: "contain",
      }} />
          <div style={{
        marginTop: "2px",
        fontSize: "15px",
        color: "#6C6E7E",
        fontWeight: "600",
      }}>설정</div>
        </button>

      </div>
    </div>
  );
}

export default Rental;