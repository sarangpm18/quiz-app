import * as React from "react";
import { StyleSheet } from "react-native";
import { APP_COLORS } from "../colors";
import BulletInfo from "../components/BulletInfo";

import { Text, View } from "../components/Themed";
import Icon from "../components/Icon";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.outerCircleContainer}>
          <View style={styles.innerCircleContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Your Score</Text>
              <Text style={{ ...styles.text, ...styles.boldText }}>150pt</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {/*=====================================================  */}
        {/* TODO:: MAKE A CARD COMPONENT */}
        {/* ==================================================== */}
        <View style={styles.cardView}>
          <View style={styles.cardContainer}>
            <View style={styles.leftBulletContainer}>
              <BulletInfo title="Completion" value="100%" />
              <BulletInfo title="Correct" value="13" type="success" />
            </View>
            <View style={styles.rightBulletContainer}>
              <BulletInfo title="Total Questions" value="20" />
              <BulletInfo title="Wrong" value="07" type="error" />
            </View>
          </View>
        </View>
        {/* ===================================================== */}
        {/* ===================================================== */}
        {/* MAKE A NEW COMPONENT FOR ICON PANEL */}
        {/* ===================================================== */}
        <View style={styles.iconContainer}>
          <View style={styles.iconRow}>
            <Icon
              type="play-circle"
              backgroundColor="#5493B4"
              text="Play Again"
            />
            <Icon
              type="eye-slash"
              backgroundColor="#BF8E6E"
              text="Review Answer"
            />
            <Icon type="share" backgroundColor="#755ED4" text="Share Score" />
          </View>
          <View style={styles.iconRow}>
            <Icon
              type="file-pdf-o"
              backgroundColor="#0099E8"
              text="Generate PDF"
            />
            <Icon type="home" backgroundColor="#BF70A0" text="Home" />
            <Icon type="star-o" backgroundColor="#71758D" text="LeaderBoard" />
          </View>
        </View>
        {/* ============================================================ */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: APP_COLORS.PRIMARY_COLOR,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  innerCircleContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: APP_COLORS.SECONDARY_COLOR,
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  outerCircleContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BD8BE4",
    height: 155,
    width: 155,
    borderRadius: 100,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  text: {
    textAlign: "justify",
    color: APP_COLORS.PRIMARY_COLOR,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardView: {
    borderRadius: 15,
    width: 330,
    height: 150,
    top: -50,
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  cardContainer: {
    margin: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  leftBulletContainer: { flex: 1, justifyContent: "space-between" },
  rightBulletContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  iconContainer: {
    height: "50%",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 50,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
});
