import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

export interface IconProps {
  children: string;
  color: string;
  size: number;
  style?: StyleProp<ViewStyle>;
}

export default function Icon({ children, color, size, style }: IconProps) {
  return (
    <Svg
      style={style}
      width="100%"
      height="100%"
      viewBox={`0 0 ${size} ${size}`}
    >
      <Path d={children} fill={color} />
    </Svg>
  );
}

Icon.defaultProps = {
  style: {},
};
