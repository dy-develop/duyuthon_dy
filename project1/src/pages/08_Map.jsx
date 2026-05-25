// 5. 현재 사용중인 화면
// 05_Rental.jsx
// 현재 사용중 화면
//

import { useNavigate } from "react-router-dom";

import homeIcon from "../assets/symbol_home.svg";
import mapIconcolor from "../assets/symbol_map_color.svg";
import settingIcon from "../assets/symbol_setting.svg";
import re50Logo from "../assets/Re50_image.svg";
import borrowIcon from "../assets/symbol_borrow.svg";

function Rental() {

  const navigate = useNavigate();

  // 추후 DB, 데이터베이스 연동 예정
  const tumbler = {
    name: "RE:50 텀블러",
    material: "스테인리스",
    capacity: "500ml",
    count: 38
  };

  const nearbyStores = [
    "홍대입구역",
    "신촌역",
    "합정역"
  ];

  return (

    <div
      style={{
        backgroundColor: "#F9F7ED",
        color: "black",
        minHeight: "100vh",
        padding: "20px",
        paddingBottom: "100px",
        
        display: "flex", //화면 위 아래가 세로 스크롤로 변경
        flexDirection: "column", // 행 열 중 어디로 할 것인가
        alignItems: "center", //세로 배치시 가로 방향 정렬
      // margin: "20px auto" --> 좌우 남은 공간을 같게 만듬 (가운데 정렬)
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
      <h1 style={{ color: "black" }}>Map</h1>

      {/* 텀블러 정보 */}
      

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          width: "90%",
          maxWidth: "500px",
          textAlign:"center"
          

          // display: "flex"(행구분이 안됨(세로))
          
         
        }}
        >
      
        
        <h2
          style= {{ //여기 tumbler.name과 재질, 용량을 없애기
            color:"#000000",
                    fontSize:"30px",
                    fontWeight: "bold",
                    fontFamily: "Arial",
                  
          }}
        
        >{tumbler.name} </h2>

        <p style={{ color: "black" }}>재질 : {tumbler.material}</p>

        <p style={{ color: "black" }}>용량 : {tumbler.capacity}</p>


      </div>

      {/* 사용 횟수 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          width: "90%",
          maxWidth: "500px",
          textAlign:"center"
        }}
      >
        <h3 style={{ color: "black" }}>사용 횟수</h3>

        <h1 style={{ color: "#D65151" }}>{tumbler.count}회</h1>
      </div>

      {/* 근처 대여소 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          width: "90%",
          maxWidth: "500px",
          textAlign:"center"
        }}
      >
        <h3 style={{ color: "black", textAlign:"center" }}>근처 대여소 지역</h3>
        <div
          style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "20px"
          }}
          
        >
          {nearbyStores.map((store, index) => (
            <p key={index} style={{color: "#000000", fontWeight: "bold", margin: 0 }}>
              {store}
            </p>
          ))}
        </div>
      </div>

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
      src={homeIcon}
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
      src={mapIconcolor}
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
        fontWeight: "700",
        color: "#679DC5",
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

export default Rental;