import React from "react";

type IconTypes = {
  color?: string;
};

const Confirm = ({ color = "#7000FF" }: IconTypes) => (
  <span className="text-primary">
    <svg
      width="106"
      height="106"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="53" cy="53" r="53" fill="#F9F4FF" />
      <path
        d="M48.7535 26.7991L48.7535 26.7991L48.7452 26.8061L44.5825 30.3667C44.3571 30.5527 43.9612 30.7771 43.4764 30.9556C42.9864 31.136 42.5377 31.2207 42.2435 31.2207H37.7049C34.0957 31.2207 31.1417 34.1746 31.1417 37.7839V42.2175C31.1417 42.5054 31.0605 42.9519 30.8856 43.4387C30.7117 43.923 30.4932 44.3135 30.3125 44.5321L26.7761 48.6972L26.7761 48.6972L26.7713 48.7029C24.7807 51.071 24.7807 54.8237 26.7713 57.1918L26.7713 57.1918L26.7761 57.1975L30.3177 61.3687L30.3177 61.3688L30.325 61.3773C30.4912 61.57 30.7082 61.9494 30.8848 62.4437C31.0597 62.9335 31.1417 63.3875 31.1417 63.6772V68.1633C31.1417 71.7725 34.0957 74.7265 37.7049 74.7265H42.2959C42.5751 74.7265 43.0237 74.8102 43.5215 74.9925C44.0138 75.1727 44.4134 75.3978 44.6352 75.5807L48.7635 79.1079C48.765 79.1092 48.7665 79.1105 48.768 79.1118C51.1243 81.152 54.9129 81.1322 57.298 79.1218L57.298 79.1219L57.3057 79.1153L61.4425 75.5807C61.6679 75.3947 62.0639 75.1701 62.5489 74.9916C63.0389 74.8112 63.4876 74.7265 63.7819 74.7265H68.2417C71.8509 74.7265 74.8049 71.7725 74.8049 68.1633V63.7034C74.8049 63.4092 74.8896 62.9605 75.07 62.4705C75.2485 61.9856 75.4731 61.5896 75.659 61.3642L79.1863 57.2359C79.1876 57.2344 79.1889 57.233 79.1901 57.2315C81.2304 54.8752 81.2106 51.0865 79.2003 48.7013L79.2003 48.7013L79.1937 48.6937L75.6592 44.5569C75.4732 44.3315 75.2486 43.9355 75.07 43.4504C74.8896 42.9604 74.8049 42.5118 74.8049 42.2175V37.7577C74.8049 34.1484 71.851 31.1944 68.2417 31.1944H63.7819C63.486 31.1944 63.0292 31.109 62.5308 30.9275C62.0366 30.7476 61.6377 30.5228 61.4163 30.3402L57.2881 26.813C57.2866 26.8117 57.2851 26.8104 57.2835 26.8091C54.9273 24.7689 51.1387 24.7888 48.7535 26.7991Z"
        stroke="#7000FF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.4">
        <path
          d="M54.5 42.8467C54.5 42.0183 53.8284 41.3467 53 41.3467C52.1716 41.3467 51.5 42.0183 51.5 42.8467V55.5179C51.5 56.3463 52.1716 57.0179 53 57.0179C53.8284 57.0179 54.5 56.3463 54.5 55.5179V42.8467Z"
          stroke="#7000FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52.9844 61.9934C52.1559 61.9934 51.4844 62.665 51.4844 63.4934C51.4844 64.3218 52.1559 64.9934 52.9844 64.9934H53.0079C53.8364 64.9934 54.5079 64.3218 54.5079 63.4934C54.5079 62.665 53.8364 61.9934 53.0079 61.9934H52.9844Z"
          stroke="#7000FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </span>
);
export default Confirm;
