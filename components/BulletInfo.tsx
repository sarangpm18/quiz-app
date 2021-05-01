import React from "react";
import { APP_COLORS } from "../colors";
import { Text, View } from "./Themed";
interface BulletInfoProps {
  title: string;
  value: string;
  type?: "success" | "error" | "default";
}
export default function BulletInfo({
  title,
  value,
  type = "default",
}: BulletInfoProps) {
  const getBulletColor = () => {
    if (type === "error") return APP_COLORS.RED;
    if (type === "success") return APP_COLORS.GREEN;
    return APP_COLORS.PRIMARY_COLOR;
  };
  return (
    <View
      style={{
        width: 120,
        height: 30,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: 8,
            height: 8,
            backgroundColor: getBulletColor(),
            borderRadius: 100,
            marginTop: 6,
          }}
        />
      </View>
      <View
        style={{
          flex: 7,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: getBulletColor(),
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {value}
        </Text>
        <Text style={{ color: APP_COLORS.TEXT_COLOR }}>{title}</Text>
      </View>
    </View>
  );
}
