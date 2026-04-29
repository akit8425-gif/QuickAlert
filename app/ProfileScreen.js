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

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      {/* Watermark */}
      <Text style={styles.watermark}>ONLY FRONTEND</Text>

      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#DFFFE8" />
        </View>

        <View>
          <Text style={styles.name}>User_01</Text>
          <Text style={styles.phone}>+91 98765 43210</Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.menuBox}>
        <MenuItem icon="person-circle-outline" label="My Information" />
        <MenuItem icon="settings-outline" label="App Settings" />
        <MenuItem icon="hardware-chip-outline" label="AI & Translation" extra="Offline" />
        <MenuItem icon="wifi-outline" label="Network Settings" />
        <MenuItem icon="information-circle-outline" label="About App" />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <NavItem icon="home" label="Home" />
        <NavItem icon="chatbox-ellipses" label="Messages" />
        <NavItem icon="map" label="Map" />
        <NavItem icon="notifications" label="Alerts" />
        <NavItem icon="person" label="Profile" active />
      </View>
    </SafeAreaView>
  );
}

function MenuItem({ icon, label, extra }) {
  return (
    <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={22} color="#9AA3AD" />
        <Text style={styles.menuText}>{label}</Text>
      </View>

      <View style={styles.menuRight}>
        {extra && <Text style={styles.extra}>{extra}</Text>}
        <Ionicons name="chevron-forward" size={20} color="#6B7280" />
      </View>
    </TouchableOpacity>
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
    paddingHorizontal: 20,
  },

  watermark: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "rgba(255,255,255,0.14)",
    fontSize: 12,
    fontWeight: "900",
    zIndex: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 25,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#1F7A4C",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  phone: {
    color: "#9AA3AD",
    fontSize: 16,
    marginTop: 4,
  },

  menuBox: {
    backgroundColor: "#101923",
    borderRadius: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#162433",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#162433",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  menuText: {
    color: "#E8ECF2",
    fontSize: 17,
    fontWeight: "700",
  },

  menuRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  extra: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "600",
  },

  logoutBtn: {
    marginTop: 30,
    height: 60,
    backgroundColor: "#2B0F12",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  logoutText: {
    color: "#FF4B5C",
    fontSize: 18,
    fontWeight: "800",
  },

  bottomNav: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
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