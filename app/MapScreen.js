import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Svg, { Line, Circle, Text as SvgText } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


const nodes = [
  { id: "n1", x: 95, y: 130, type: "connected" },
  { id: "n2", x: 200, y: 95, type: "connected" },
  { id: "n3", x: 305, y: 130, type: "connected" },
  { id: "n4", x: 55, y: 245, type: "connected" },
  { id: "n5", x: 185, y: 195, type: "connected" },
  { id: "n6", x: 290, y: 260, type: "you" },
  { id: "n7", x: 370, y: 240, type: "connected" },
  { id: "n8", x: 160, y: 305, type: "connected" },
  { id: "n9", x: 95, y: 365, type: "connected" },
  { id: "n10", x: 230, y: 380, type: "connected" },
  { id: "n11", x: 360, y: 350, type: "connected" },
];

const links = [
  ["n1", "n2"], ["n2", "n3"], ["n1", "n5"], ["n2", "n5"],
  ["n3", "n7"], ["n4", "n1"], ["n4", "n5"], ["n4", "n9"],
  ["n5", "n6"], ["n5", "n8"], ["n6", "n7"], ["n6", "n11"],
  ["n8", "n9"], ["n8", "n10"], ["n9", "n10"], ["n10", "n11"],
  ["n7", "n11"], ["n5", "n10"],
];

export default function MapScreen() {
  const router = useRouter();
  const getNode = (id) => nodes.find((n) => n.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      <Text style={styles.onlyFrontend}>ONLY FRONTEND</Text>

      <Text style={styles.title}>Network Map</Text>

      <View style={styles.mapCard}>
        <View style={styles.mapHeader}>
          <Text style={styles.headerText}>Nodes: 12</Text>
          <Text style={styles.headerText}>Range: 120m</Text>
        </View>

        <Text style={styles.watermark}>ONLY FRONTEND</Text>

        <Svg height="430" width="100%">
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
                opacity="0.55"
              />
            );
          })}

          {nodes.map((node) => (
            <Circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="13"
              fill={node.type === "you" ? "#2F80FF" : "#3BE477"}
              stroke="#123"
              strokeWidth="2"
            />
          ))}
        </Svg>
      </View>

      <View style={styles.legend}>
        <Legend color="#2F80FF" text="You" />
        <Legend color="#3BE477" text="Connected Node" />
        <Legend color="#9AA3AD" text="Disconnected Node" />
      </View>

     {/* Bottom Navigation */}
          <View style={styles.bottomNav}>
    
            <TouchableOpacity onPress={() => router.replace('/Home')} style={styles.navItem}>
              <Ionicons name="home" size={22} color="#00FF99" />
              <Text style={[styles.navText, { color: '#00FF99' }]}>Home</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => router.push('/MessagesScreen')} style={styles.navItem}>
              <Ionicons name="chatbubble-outline" size={22} color="#aaa" />
              <Text style={styles.navText}>Messages</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => router.push('/MapScreen')} style={styles.navItem}>
              <Ionicons name="map-outline" size={22} color="#aaa" />
              <Text style={styles.navText}>Map</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => router.push('/EmergencyAlertScreen')} style={styles.navItem}>
              <Ionicons name="notifications-outline" size={22} color="#aaa" />
              <Text style={styles.navText}>Alerts</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => router.push('/ProfileScreen')} style={styles.navItem}>
              <Ionicons name="person-outline" size={22} color="#aaa" />
              <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
    
          </View>
    </SafeAreaView>
  );
}

function Legend({ color, text }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{text}</Text>
    </View>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Ionicons
        name={icon}
        size={25}
        color={active ? "#57F287" : "#7A828D"}
      />
      <Text style={[styles.navText, active && styles.activeNavText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B12",
    paddingHorizontal: 22,
  },

  onlyFrontend: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "rgba(255,255,255,0.18)",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
    zIndex: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 50,
    marginBottom: 25,
  },

  mapCard: {
    height: 485,
    backgroundColor: "#111B26",
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#162433",
  },

  mapHeader: {
    position: "absolute",
    top: 25,
    left: 18,
    right: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 3,
  },

  headerText: {
    color: "#DCE2EA",
    fontSize: 17,
    fontWeight: "800",
  },

  watermark: {
    position: "absolute",
    top: "45%",
    alignSelf: "center",
    color: "rgba(255,255,255,0.08)",
    fontSize: 34,
    fontWeight: "900",
    transform: [{ rotate: "-25deg" }],
    zIndex: 2,
  },

  legend: {
    marginTop: 20,
    marginLeft: 20,
    gap: 14,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  legendDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: 14,
  },

  legendText: {
    color: "#D3D8DF",
    fontSize: 16,
    fontWeight: "700",
  },

  
 
 
   bottomNav: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 18,
    height: 72,
    backgroundColor: "#0C141D",
    borderRadius: 22,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#101C28",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: 65,
    height: 60,
  },

  navText: {
    color: "#7A828D",
    fontSize: 12,
    fontWeight: "700",
  },

  activeNavText: {
    color: "#57F287",
  },
});