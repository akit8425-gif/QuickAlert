import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EmergencyAlertScreen() {
  const [selected, setSelected] = useState("Medical");

  const types = ["Medical", "Fire", "Rescue", "Other"];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      {/* Watermark */}
      <Text style={styles.watermark}>ONLY FRONTEND</Text>

      {/* Icon */}
      <View style={styles.iconBox}>
        <Ionicons name="warning-outline" size={120} color="#FF4B5C" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Send Emergency Alert?</Text>

      <Text style={styles.desc}>
        This will notify all nearby{"\n"}users with high priority.
      </Text>

      {/* Alert Type */}
      <Text style={styles.label}>Alert Type</Text>

      <View style={styles.typeRow}>
        {types.map((item) => {
          const active = selected === item;
          return (
            <TouchableOpacity
              key={item}
              style={[
                styles.typeBtn,
                active && styles.activeTypeBtn,
              ]}
              onPress={() => setSelected(item)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.typeText,
                  active && styles.activeTypeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} activeOpacity={0.85}>
        <Text style={styles.buttonText}>Send Alert</Text>
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

  watermark: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "rgba(255,255,255,0.14)",
    fontSize: 12,
    fontWeight: "900",
    zIndex: 10,
  },

  iconBox: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },

  desc: {
    color: "#AAB2BD",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 30,
  },

  label: {
    color: "#DCE2EA",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
  },

  typeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  typeBtn: {
    flex: 1,
    height: 55,
    backgroundColor: "#121B26",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#162433",
  },

  activeTypeBtn: {
    backgroundColor: "#2B0F12",
    borderColor: "#FF4B5C",
  },

  typeText: {
    color: "#B8BEC8",
    fontSize: 16,
    fontWeight: "700",
  },

  activeTypeText: {
    color: "#FF4B5C",
  },

  button: {
    marginTop: "auto",
    marginBottom: 40,
    height: 65,
    backgroundColor: "#FF4B5C",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },
});