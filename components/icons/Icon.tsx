import { ReactElement } from "react";

export interface IconProps {
  children: string;
  color: string;
  size: number;
}

export default function Icon({ children, color, size }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`}>
      <title>pencil</title>
      <path fill={color} d={children} />
    </svg>
  );
}
