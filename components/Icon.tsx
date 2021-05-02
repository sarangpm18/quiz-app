import React from "react";
import { Text, View } from "./Themed";
import { FontAwesome } from "@expo/vector-icons";
import { APP_COLORS } from "../colors";

interface IconProps {
  type:
    | "play-circle"
    | "eye-slash"
    | "share"
    | "file-pdf-o"
    | "home"
    | "star-o";
  backgroundColor: string;
  text: string;
}

export default function Icon({ type, backgroundColor, text }: IconProps) {
  return (
    <View style={{width: 90, alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: backgroundColor,
          borderRadius: 100,
          height: 50,
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome name={type} color="white" size={30} />
      </View>
      <Text style={{ color: APP_COLORS.TEXT_COLOR}}>
        {text}
      </Text>
    </View>
  );
}
