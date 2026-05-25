// 06_Setting.jsx
// 개인 설정 화면

import { useNavigate } from "react-router-dom";

import homeIcon from "../assets/symbol_home.svg";
import mapIcon from "../assets/symbol_map.svg";
import settingIconcolor from "../assets/symbol_setting_color.svg";
import re50Logo from "../assets/Re50_image.svg";

function Setting() {

  const navigate = useNavigate();

  // 추후 DB 연동
  const userId = "admin";

  return (

    <div
      style={{
        backgroundColor: "#F9F7ED",
        minHeight: "100vh",
        padding: "20px",
        paddingBottom: "100px",

        // width: "300px"
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img
                  src={re50Logo}
                  alt="RE:50"
                  style={{
                  width: "180px",
                  height: "auto",
                  marginBottom: "10px",
                  alignSelf: "flex-start",
                  }}
                />

      {/* 제목 */}
      <h1 style={{ color: "black" }}>개인 설정</h1>

      {/* 아이디 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          
          width: "90%",
          maxWidth: "500px",
          textAlign:"center",
        }}
      >
        <h3 style={{ color: "black" }}>아이디</h3>
        <p style={{ color: "#000000" }}>{userId}</p>
      </div>

      {/* 홈페이지 소개글 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          width: "90%",
          maxWidth: "500px",
          textAlign:"center",
        }}
      >
        <h3 style={{ color: "black" }}>서비스 소개</h3>

        <p style={{ color: "black" }}>
          RE:50은 텀블러 대여 서비스를 통해
          일회용 컵 사용을 줄이고 환경 보호를
          실천할 수 있도록 돕는 플랫폼입니다.
        </p>
      </div>

      {/* 로그아웃 */}
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "15px",
          marginTop: "30px",
          backgroundColor: "#6EA1CC",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "20px",
          cursor: "pointer",
          borderRadius: "50px",
          border: "2px #BFDDF5 solid",

          width: "90%",
          maxWidth: "500px",
          textAlign:"center",
        }}
      >
        로그아웃
      </button>
      
      {/* 하단 메뉴 */}
      {/* 하단 메뉴 */}
<div
  style={{
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: "700px",
    backgroundColor: "#FFFFFF",
    borderRadius: "60px",
    padding: "12px",
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
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    <img
      src={homeIcon}
      alt="home"
      style={{
        width: "52px",
        height: "52px",
        objectFit: "contain",
      }}
    />

    <div
      style={{
        marginTop: "8px",
        fontSize: "20px",
        color: "#6C6E7E",
        fontWeight: "600",
      }}
    >
      HOME
    </div>
  </button>

  {/* 사용중 */}
  <button
    onClick={() => navigate("/rental")}
    style={{
      flex: 1,
      backgroundColor: "transparent",
      border: "none",
      padding: "18px",
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
        width: "52px",
        height: "52px",
        objectFit: "contain",
      }}
    />

    <div
      style={{
        marginTop: "8px",
        fontSize: "20px",
        color: "#6C6E7E",
        fontWeight: "600",
      }}
    >
      대여
    </div>
  </button>

  {/* 설정 */}
  <button
    onClick={() => navigate("/setting")}
    style={{

      flex: 1.3,
      backgroundColor: "#D8E4EF",
      border: "none",
      borderRadius: "50px",
      padding: "18px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      
    }}
  >
    <img
      src={settingIconcolor}
      alt="setting"
      style={{
        width: "52px",
        height: "52px",
        objectFit: "contain",
      }}
    />

    <div
      style={{
        marginTop: "8px",
        fontSize: "22px",
        fontWeight: "700",
        color: "#679DC5",
      }}
    >
      설정
    </div>
  </button>
</div>
</div>
  );
}

export default Setting;

{/*
// 하단 메뉴
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: "15px",
          borderTop: "1px solid #ddd"
        }}
      >

        <button onClick={() => navigate("/main")} style={{ color: "lavender" }}>
          HOME
        </button>

        <button onClick={() => navigate("/rental")} style={{ color: "lavender" }}>
          사용중
        </button>

        <button onClick={() => navigate("/setting")} style={{ color: "lavender" }}>
          설정
        </button>

      </div>
*/}