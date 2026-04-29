import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

export default function AIPriorityScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      {/* Watermark */}
      <Text style={styles.topWatermark}>ONLY FRONTEND</Text>

      {/* Brain Icon (Fake UI Glow) */}
      <View style={styles.brainBox}>
        <View style={styles.brainGlow} />
        <Ionicons name="brain" size={120} color="#A855F7" />
      </View>

      {/* AI Text */}
      <Text style={styles.aiTitle}>AI Analysis</Text>

      <Text style={styles.desc}>
        Emergency messages{"\n"}are given highest priority.
      </Text>

      {/* Priority List */}
      <Text style={styles.subTitle}>Current Priority Order</Text>

      <View style={[styles.card, { backgroundColor: "#3A1115" }]}>
        <Text style={[styles.rank, { color: "#FF4B5C" }]}>1</Text>
        <Text style={[styles.cardText, { color: "#FF4B5C" }]}>
          Emergency
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: "#2B230B" }]}>
        <Text style={[styles.rank, { color: "#FACC15" }]}>2</Text>
        <Text style={[styles.cardText, { color: "#FACC15" }]}>
          Normal
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: "#0E2A3D" }]}>
        <Text style={[styles.rank, { color: "#38A9FF" }]}>3</Text>
        <Text style={[styles.cardText, { color: "#38A9FF" }]}>
          Info
        </Text>
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

function NavItem({ icon, label, active }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Ionicons
        name={icon}
        size={24}
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

  topWatermark: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "rgba(255,255,255,0.15)",
    fontWeight: "900",
    fontSize: 12,
    zIndex: 10,
  },

  brainBox: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
  },

  brainGlow: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#A855F7",
    opacity: 0.15,
  },

  aiTitle: {
    color: "#57F287",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  desc: {
    color: "#DCE2EA",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 25,
  },

  subTitle: {
    color: "#DCE2EA",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    height: 65,
    borderRadius: 12,
    paddingHorizontal: 18,
    marginBottom: 12,
  },

  rank: {
    fontSize: 22,
    fontWeight: "900",
    marginRight: 15,
  },

  cardText: {
    fontSize: 20,
    fontWeight: "800",
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
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: 65,
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