import React, { useRef } from "react";
import { Animated, Easing } from "react-native";
import Icon, { IconProps } from "./Icon";

export default function LoadingIcon(
  props: Omit<IconProps, "children" | "size">
) {
  const [spinValue] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{
        transform: [{ rotate: spin }],
      }}
    >
      <Icon size={24} {...props}>
        M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z
      </Icon>
    </Animated.View>
  );
}
