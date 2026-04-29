import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Svg, { Line, Circle } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

const nodes = [
  { id: "1", x: 90, y: 140 },
  { id: "2", x: 200, y: 100 },
  { id: "3", x: 310, y: 140 },
  { id: "4", x: 60, y: 250 },
  { id: "5", x: 190, y: 200 },
  { id: "6", x: 290, y: 250 },
  { id: "7", x: 140, y: 310 },
  { id: "8", x: 230, y: 350 },
  { id: "9", x: 330, y: 320 },
  { id: "11", x: 350, y: 80 }, // destination
];

const links = [
  ["1", "2"], ["2", "3"], ["1", "5"], ["2", "5"],
  ["3", "6"], ["4", "1"], ["4", "5"], ["4", "7"],
  ["5", "6"], ["5", "7"], ["6", "9"], ["7", "8"],
  ["8", "9"], ["3", "11"], ["2", "11"],
];

// 🔥 Highlighted best path
const bestPath = [
  ["7", "5"],
  ["5", "2"],
  ["2", "11"],
];

export default function RoutingScreen() {
  const getNode = (id) => nodes.find((n) => n.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      {/* Watermark */}
      <Text style={styles.topWatermark}>ONLY FRONTEND</Text>

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
        <Text style={styles.headerTitle}>Routing</Text>
        <View style={{ width: 28 }} />
      </View>

      <Text style={styles.subTitle}>Best Route to Node 11</Text>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.centerWatermark}>ONLY FRONTEND</Text>

        <Svg height="400" width="100%">
          {/* normal links */}
          {links.map(([a, b], index) => {
            const n1 = getNode(a);
            const n2 = getNode(b);
            return (
              <Line
                key={index}
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke="#7B8794"
                strokeWidth="2"
                opacity="0.4"
              />
            );
          })}

          {/* highlighted path */}
          {bestPath.map(([a, b], index) => {
            const n1 = getNode(a);
            const n2 = getNode(b);
            return (
              <Line
                key={"path" + index}
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke="#FFD43B"
                strokeWidth="5"
              />
            );
          })}

          {/* nodes */}
          {nodes.map((node) => (
            <Circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="12"
              fill={node.id === "11" ? "#2F80FF" : "#3BE477"}
            />
          ))}
        </Svg>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.infoText}>Distance: 4 hops</Text>
        <Text style={styles.infoText}>Estimated Time: 2.3 min</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Recalculate Route</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B12",
    paddingHorizontal: 22,
  },

  topWatermark: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "rgba(255,255,255,0.15)",
    fontWeight: "900",
    fontSize: 12,
    zIndex: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },

  subTitle: {
    color: "#DCE2EA",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 15,
    fontWeight: "700",
  },

  card: {
    height: 420,
    backgroundColor: "#111B26",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#162433",
    overflow: "hidden",
  },

  centerWatermark: {
    position: "absolute",
    alignSelf: "center",
    top: "45%",
    color: "rgba(255,255,255,0.07)",
    fontSize: 30,
    fontWeight: "900",
    transform: [{ rotate: "-25deg" }],
    zIndex: 2,
  },

  info: {
    marginTop: 20,
    gap: 8,
  },

  infoText: {
    color: "#DCE2EA",
    fontSize: 17,
    fontWeight: "700",
  },

  button: {
    marginTop: 25,
    backgroundColor: "#28A745",
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
});