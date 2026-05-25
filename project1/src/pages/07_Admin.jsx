// 07_Admin.jsx
// 관리자 페이지

import { useNavigate } from "react-router-dom";

import {
  stockWarning,
  relocationRecommend,
  kioskRecommend,
} from "../data/adminData";

import { analyzeAI } from "../data/socket";

import re50Logo from "../assets/Re50_image.svg";

function Admin() {
  const navigate = useNavigate();
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
  //const handleAnalyze = () => {
    //alert("AI 분석을 시작합니다.");
  //};

  return (
    <div className="admin-page"
    style={{
      width: "100%",
      boxSizing: "border-box",
      padding:"20px",
      backgroundcolor: "#F9F7ED"
    }}>

      {/* 헤더 */}
      <div className="dashboard-header">

        <h2 style= {{color:"black", fontWeight: "bold", marginBottom:"50px"}}>Dash board</h2>

        <img
                          src={re50Logo}
                          alt="RE:50"
                          style={{
                          width: "180px",
                          height: "auto",
                          marginLeft:"-80px",
                          marginBottom: "10px",
                          alignSelf: "flex-start",
                          }}
                        />

        <button
          style= {{color:"black", marginBottom:"50px"}}
          className="setting-btn"
          onClick={() => navigate("/setting")}
        >
          ⚙
        </button>

        

      </div>
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

      {/* 재고 부족 사전 경고 */}
      <section style={{ width: "80%", maxWidth: "800px", maxWidth: "800px", margin: "0 auto", marginBottom: "20px",
       }} className="dashboard-section">

        <div className="section-title">
          <h3 style= {{color:"black"}}>재고부족 사전 경고</h3>
          <span>전체보기</span>
        </div>

        <p className="section-desc"
        style={{color: "#588EB6",
          fontSize: "14px",
          marginBottom: "20px",}}>
          ✦ AI가 분석한 향후 6시간 예측입니다.
        </p>

        <div className="warning-grid">

          {stockWarning.map((item, index) => (
            <div
              className="warning-card"
              key={index}
            >
              <div className="danger-tag">
                위험
              </div>

              <h4 style= {{color:"#474747"}} >{item.location}</h4>

              <p>
                현재 재고 대비 소진 예상
              </p>

              <div
                  className="count-box"
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "10px",
                  }}
              >
              <div
                 style={{
                    backgroundColor: "#FFE5E5",
                    color: "#D65151",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                대여가능 · {item.rentalAvailable}개
              </div>

              <div
                style={{
                  backgroundColor: "#DCEAF7",
                  color: "#4A7899",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "bold",
                 }}
                >
                  반납가능 · {item.returnAvailable}개
                </div>
            </div>
            </div>
          ))}

        </div>

      </section>

      {/* 텀블러 재배치 추천 */}
      <section style={{ width: "80%", maxWidth: "800px", margin: "0 auto", marginBottom: "20px",
       }} className="dashboard-section">

        <div className="section-title">
          <h3 style= {{color:"black"}}>텀블러 재배치 추천</h3>
          <span>전체보기</span>
        </div>

        <p className="section-desc"
        style={{
          color: "#588EB6",
          fontSize: "14px",
          marginBottom: "20px",
        }}>
           ✦ AI가 분석한 최적의 경로입니다.
        </p>

        {relocationRecommend.map((item, index) => (
          <div
            className="relocation-row"
            key={index}
            style= {{display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "15px 0",
      borderBottom: "1px solid #E5E5E5",
      color: "#474747",
      fontWeight: "bold",
      }}
          >
            {item.from}
            {" → "}
            {item.to}

            <span style={{
        backgroundColor: "#DCEAF7",
        color: "#4A7899",
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
              +{item.amount}개
               
            </span>
            
          </div>
          /* color설정 안하면 파란색임*/
        ))}

      </section>

      {/* 신규 키오스크 위치 추천 */}
      <section style={{ width: "80%", maxWidth: "800px", margin: "0 auto", marginBottom: "20px" }} className="dashboard-section">

        <div className="section-title">
          <h3 style= {{color:"black"}}>신규 키오스크 위치 추천
            (이건 점수로 구현하기 어렵지 않을까 싶어요.)
          </h3>
          <span>전체보기</span>
        </div>

        <p style={{color: "#588EB6",
          fontSize: "14px",
          marginBottom: "20px",}} className="section-desc">
          ✦ AI가 최근 6개월의 데이터를 분석한 최적의 후보지입니다.
        </p>

        {kioskRecommend.map((item, index) => (
          <div
            className="location-row"
            key={index}
             style= {{color:"#474747"}}
          >

            <div>

              <h4>{item.name}</h4>

              <p>
                {item.reason}
              </p>

            </div>

            <div className="score">
              {item.score}점
            </div>

          </div>
        ))}

      </section>

    </div>
  );
}

export default Admin;