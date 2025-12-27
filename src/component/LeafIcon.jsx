import React from 'react';

const LeafIcon = ({ size = 100, color = "currentColor", strokeWidth = 2 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 110C50 110 45 90 45 75C45 60 55 55 55 55M55 55C65 50 85 55 90 40C95 25 75 10 55 25C45 32 48 45 55 55ZM55 55C45 60 25 55 20 70C15 85 35 100 55 85C65 78 62 65 55 55ZM55 55C65 50 85 40 80 20C75 0 50 0 40 20C35 30 45 45 55 55ZM55 55C45 50 25 40 30 20C35 0 60 0 70 20C75 30 65 45 55 55Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeafIcon;