// src/data/socket.js

export async function analyzeAI() {
  const response = await fetch("https://duyuthon7.onrender.com/ai/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "텀블러 100회 사용!AND!대기오염",
    }),
  });

  const data = await response.json();

  console.log(data.result);

  return data.result;
}