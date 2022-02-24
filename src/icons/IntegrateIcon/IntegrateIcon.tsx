import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";



const IntegrateIcon = ({ color, fontSize, className, style,...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
    {...props}
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M20 16C19.3793 16.0032 18.7748 16.1989 18.27 16.56L15.82 15.11C15.9356 14.7512 15.9963 14.377 16 14C15.9971 13.1154 15.7011 12.2568 15.1583 11.5584C14.6155 10.8599 13.8565 10.3611 13 10.14V7.82C13.6672 7.58411 14.2296 7.11994 14.5876 6.50952C14.9457 5.89911 15.0765 5.18177 14.9568 4.48427C14.8371 3.78678 14.4747 3.15404 13.9337 2.6979C13.3926 2.24176 12.7077 1.99158 12 1.99158C11.2923 1.99158 10.6074 2.24176 10.0663 2.6979C9.52527 3.15404 9.16288 3.78678 9.04321 4.48427C8.92353 5.18177 9.05429 5.89911 9.41237 6.50952C9.77045 7.11994 10.3328 7.58411 11 7.82V10.14C10.1435 10.3611 9.38451 10.8599 8.84169 11.5584C8.29887 12.2568 8.00287 13.1154 8 14C8.00372 14.377 8.0644 14.7512 8.18 15.11L5.73 16.56C5.22516 16.1989 4.62072 16.0032 4 16C3.40666 16 2.82664 16.176 2.33329 16.5056C1.83994 16.8352 1.45543 17.3038 1.22836 17.852C1.0013 18.4001 0.94189 19.0033 1.05765 19.5853C1.1734 20.1672 1.45912 20.7018 1.87868 21.1213C2.29824 21.5409 2.83279 21.8266 3.41473 21.9424C3.99667 22.0581 4.59987 21.9987 5.14805 21.7716C5.69623 21.5446 6.16477 21.1601 6.49441 20.6667C6.82405 20.1734 7 19.5933 7 19C6.9963 18.7291 6.95594 18.46 6.88 18.2L9.18 16.83C9.92945 17.575 10.9433 17.9932 12 17.9932C13.0567 17.9932 14.0706 17.575 14.82 16.83L17.12 18.2C16.9524 18.8056 16.9793 19.4485 17.1967 20.0381C17.4141 20.6276 17.8112 21.134 18.3318 21.4858C18.8525 21.8376 19.4705 22.017 20.0986 21.9987C20.7267 21.9805 21.3332 21.7654 21.8325 21.384C22.3318 21.0026 22.6988 20.474 22.8816 19.8728C23.0644 19.2716 23.0538 18.6282 22.8514 18.0334C22.6489 17.4385 22.2648 16.9223 21.7532 16.5574C21.2416 16.1926 20.6284 15.9976 20 16ZM4 20C3.80222 20 3.60888 19.9414 3.44443 19.8315C3.27998 19.7216 3.15181 19.5654 3.07612 19.3827C3.00043 19.2 2.98063 18.9989 3.01922 18.8049C3.0578 18.6109 3.15304 18.4327 3.29289 18.2929C3.43275 18.153 3.61093 18.0578 3.80491 18.0192C3.99889 17.9806 4.19996 18.0004 4.38268 18.0761C4.56541 18.1518 4.72159 18.28 4.83147 18.4444C4.94135 18.6089 5 18.8022 5 19C5 19.2652 4.89464 19.5196 4.70711 19.7071C4.51957 19.8946 4.26522 20 4 20ZM12 4C12.1978 4 12.3911 4.05865 12.5556 4.16853C12.72 4.27842 12.8482 4.43459 12.9239 4.61732C12.9996 4.80005 13.0194 5.00111 12.9808 5.19509C12.9422 5.38908 12.847 5.56726 12.7071 5.70711C12.5673 5.84696 12.3891 5.9422 12.1951 5.98079C12.0011 6.01937 11.8 5.99957 11.6173 5.92388C11.4346 5.8482 11.2784 5.72002 11.1685 5.55557C11.0587 5.39113 11 5.19779 11 5C11 4.73479 11.1054 4.48043 11.2929 4.2929C11.4804 4.10536 11.7348 4 12 4ZM12 16C11.6044 16 11.2178 15.8827 10.8889 15.6629C10.56 15.4432 10.3036 15.1308 10.1522 14.7654C10.0009 14.3999 9.96126 13.9978 10.0384 13.6098C10.1156 13.2219 10.3061 12.8655 10.5858 12.5858C10.8655 12.3061 11.2219 12.1156 11.6098 12.0384C11.9978 11.9613 12.3999 12.0009 12.7654 12.1522C13.1308 12.3036 13.4432 12.56 13.6629 12.8889C13.8827 13.2178 14 13.6044 14 14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16ZM20 20C19.8022 20 19.6089 19.9414 19.4444 19.8315C19.28 19.7216 19.1518 19.5654 19.0761 19.3827C19.0004 19.2 18.9806 18.9989 19.0192 18.8049C19.0578 18.6109 19.153 18.4327 19.2929 18.2929C19.4327 18.153 19.6109 18.0578 19.8049 18.0192C19.9989 17.9806 20.2 18.0004 20.3827 18.0761C20.5654 18.1518 20.7216 18.28 20.8315 18.4444C20.9414 18.6089 21 18.8022 21 19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default IntegrateIcon;
