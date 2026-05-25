// src/data/test1.js
//
export async function analyzeMoveAI() {
  const response = await fetch("https://duyuthon7.onrender.com/ai/analyzeMove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      
    }),
  });

  const data = await response.json();

  console.log(data.result);

  return data.result;
}
// src/data/socket.js

export async function analyzeStockAI() {
  const response = await fetch("https://duyuthon7.onrender.com/ai/analyzeStock", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      
    }),
  });

  const data = await response.json();

  console.log(data.result);

  return data.result;
}