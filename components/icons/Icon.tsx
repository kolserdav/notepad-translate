import React from "react";
import Svg, { Path } from "react-native-svg";

export interface IconProps {
  children: string;
  color: string;
  size: number;
}

export default function Icon({ children, color, size }: IconProps) {
  return (
    <Svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
      <Path d={children} fill={color} />
    </Svg>
  );
}
