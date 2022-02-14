import * as React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21 1H8L1 9L8 17H21C21.5304 17 22.0391 16.7893 22.4142 16.4142C22.7893 16.0391 23 15.5304 23 15V3C23 2.46957 22.7893 1.96086 22.4142 1.58579C22.0391 1.21071 21.5304 1 21 1V1Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 6L12 12"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 6L18 12"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
