import React from 'react';

export const CloseIconX = ({ size = 24, color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill={color}
        {...props}
    >
        <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M10 8.586L2.929 1.515L1.515 2.929L8.586 10l-7.071 7.071l1.414 1.414L10 11.414l7.071 7.071l1.414-1.414L11.414 10l7.071-7.071l-1.414-1.414L10 8.586z" />
    </svg>
);
