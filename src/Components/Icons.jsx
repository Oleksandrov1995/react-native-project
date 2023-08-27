import React from "react";
import Svg, { Path, SvgXml } from "react-native-svg";

export const LogOutIcon = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
    <Path
      d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
      stroke="#BDBDBD"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M17 16L21 12L17 8"
      stroke="#BDBDBD"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M21 12H9"
      stroke="#BDBDBD"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const PostsScreenIcon = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 40 40" fill={color}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 11H18V18H11V11Z"
      stroke="#212121"
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 11H29V18H22V11Z"
      stroke="#212121"
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 22H29V29H22V22Z"
      stroke="#212121"
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 22H18V29H11V22Z"
      stroke="#212121"
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const CreatePostIcon = ({ width, height, fill }) => (
  <Svg width={width} height={height} viewBox="0 0 40 40" fill={fill}>
   
     <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 13.5H19.5V19.5H13.5V20.5H19.5V26.5H20.5V20.5H26.5V19.5H20.5V13.5Z" fill={fill} fill-opacity="0.8"/>
    
   
  </Svg>
);

export const ProfileScreenIcon = ({ width, height, color, fill }) => (
  <Svg width={width} height={height} viewBox="0 0 40 40" fill={fill}>
    <Path
      d="M28 29V27C28 24.7909 26.2091 23 24 23H16C13.7909 23 12 24.7909 12 27V29"
      stroke={color}
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
      stroke={color}
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const svgDeletePost = `
<svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_38_39)">
<rect width="70" height="40" rx="20" fill="#F6F6F6"/>
<path d="M26 14H28H44" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.5 14C42.5 13.7239 42.2761 13.5 42 13.5C41.7239 13.5 41.5 13.7239 41.5 14H42.5ZM28.5 14C28.5 13.7239 28.2761 13.5 28 13.5C27.7239 13.5 27.5 13.7239 27.5 14H28.5ZM30.5 14C30.5 14.2761 30.7239 14.5 31 14.5C31.2761 14.5 31.5 14.2761 31.5 14H30.5ZM38.5 14C38.5 14.2761 38.7239 14.5 39 14.5C39.2761 14.5 39.5 14.2761 39.5 14H38.5ZM41.5 14V28H42.5V14H41.5ZM41.5 28C41.5 28.8284 40.8284 29.5 40 29.5V30.5C41.3807 30.5 42.5 29.3807 42.5 28H41.5ZM40 29.5H30V30.5H40V29.5ZM30 29.5C29.1716 29.5 28.5 28.8284 28.5 28H27.5C27.5 29.3807 28.6193 30.5 30 30.5V29.5ZM28.5 28V14H27.5V28H28.5ZM31.5 14V12H30.5V14H31.5ZM31.5 12C31.5 11.1716 32.1716 10.5 33 10.5V9.5C31.6193 9.5 30.5 10.6193 30.5 12H31.5ZM33 10.5H37V9.5H33V10.5ZM37 10.5C37.8284 10.5 38.5 11.1716 38.5 12H39.5C39.5 10.6193 38.3807 9.5 37 9.5V10.5ZM38.5 12V14H39.5V12H38.5Z" fill="#BDBDBD"/>
<path d="M33 19V25" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37 19V25" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_38_39">
<rect width="70" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export const DeletePostIcon = () => <SvgXml xml={svgDeletePost} />;

const svgAddFoto = `
<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="white"/>
<g clip-path="url(#clip0_32_29)">
<path d="M29.9998 33.2C31.7671 33.2 33.1998 31.7673 33.1998 30C33.1998 28.2327 31.7671 26.8 29.9998 26.8C28.2325 26.8 26.7998 28.2327 26.7998 30C26.7998 31.7673 28.2325 33.2 29.9998 33.2Z" fill="#BDBDBD"/>
<path d="M27 20L25.17 22H22C20.9 22 20 22.9 20 24V36C20 37.1 20.9 38 22 38H38C39.1 38 40 37.1 40 36V24C40 22.9 39.1 22 38 22H34.83L33 20H27ZM30 35C27.24 35 25 32.76 25 30C25 27.24 27.24 25 30 25C32.76 25 35 27.24 35 30C35 32.76 32.76 35 30 35Z" fill="#BDBDBD"/>
</g>
<defs>
<clipPath id="clip0_32_29">
<rect width="24" height="24" fill="white" transform="translate(18 18)"/>
</clipPath>
</defs>
</svg>

`;

export const AddFotoIcon = () => <SvgXml xml={svgAddFoto} />;

const svgPlace = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const PlaceIcon = () => <SvgXml xml={svgPlace} />;




