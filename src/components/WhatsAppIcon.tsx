import React from 'react';

interface WhatsAppIconProps {
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ size = 16, style, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
    >
      {/* WhatsApp Green Background Bubble */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
        fill="#25D366"
      />
      {/* White Phone Handset */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.52 14.36C17.22 14.21 15.75 13.49 15.48 13.39C15.21 13.29 15.01 13.24 14.81 13.54C14.61 13.84 14.04 14.51 13.86 14.71C13.69 14.91 13.51 14.93 13.21 14.79C12.91 14.64 11.95 14.33 10.81 13.31C9.92 12.52 9.32 11.54 9.15 11.24C8.97 10.94 9.13 10.78 9.28 10.63C9.42 10.5 9.58 10.28 9.73 10.11C9.88 9.94 9.93 9.81 10.03 9.61C10.13 9.41 10.08 9.24 10.01 9.09C9.93 8.94 9.34 7.48 9.09 6.89C8.85 6.31 8.61 6.39 8.43 6.38C8.26 6.37 8.06 6.37 7.86 6.37C7.66 6.37 7.34 6.44 7.07 6.74C6.79 7.04 6.02 7.76 6.02 9.22C6.02 10.68 7.09 12.09 7.24 12.29C7.39 12.49 9.33 15.48 12.3 16.76C13.01 17.07 13.56 17.25 13.99 17.39C14.71 17.62 15.36 17.58 15.87 17.51C16.44 17.42 17.63 16.79 17.88 16.09C18.13 15.39 18.13 14.8 18.05 14.67C17.98 14.55 17.82 14.51 17.52 14.36Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};
