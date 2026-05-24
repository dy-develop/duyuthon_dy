// src/data/adminData.js

export const stockWarning = [
  {
    location: "신촌역",
    rentalAvailable: 5,
    returnAvailable: 2,
  },
  {
    location: "홍대입구역",
    rentalAvailable: 3,
    returnAvailable: 8,
  },
  {
    location: "강남역",
    rentalAvailable: 2,
    returnAvailable: 3,
  },
];

export const relocationRecommend = [
  {
    from: "강남역",
    to: "신촌역",
    amount: 8,
  },
  {
    from: "판교역",
    to: "홍대입구",
    amount: 5,
  },
];

export const kioskRecommend = [
  {
    name: "이대역 2번 출구",
    reason:"유동인구 많음",
    score: 94,
  },
  {
    name: "서울숲역 1번 출구",
    reason: "카페 밀집",
    score: 87,
  },
];