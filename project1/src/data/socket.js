import { io } from "socket.io-client";

const socket = io("https://duyuthon7.onrender.com/", {
  auth: {
    token: localStorage.getItem("token"),
  },
});

socket.on("connect", () => {
  console.log("연결됨");
});

export async function analyzeAI() {
  const response = await fetch(
    "https://duyuthon7.onrender.com/ai/analyze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "텀블러 100회 사용!AND!대기오염",
      }),
    }
  );

  const data = await response.json();

  return data.result;
}

export default socket;

/* import { io } from "socket.io-client";

const socket = io("https://duyuthon7.onrender.com/");

socket.on("connect", () => {
    console.log("연결됨");
});
//나중에 찾기 쉽게 그냥 보내는 거라서 신경안써도됨
const socket = io("https://duyuthon7.onrender.com/", {
    auth: {
        token: localStorage.getItem("token")
    }
});
*/
