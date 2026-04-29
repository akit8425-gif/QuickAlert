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

export default function TranslationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      <Text style={styles.watermark}>ONLY FRONTEND</Text>

      <View style={styles.content}>
        <Text style={styles.label}>From</Text>

        <View style={styles.selectBox}>
          <Text style={styles.selectText}>English</Text>
          <Ionicons name="chevron-down" size={24} color="#8C95A1" />
        </View>

        <View style={styles.textBox}>
          <Text style={styles.inputText}>
            We need food and water{"\n"}immediately.
          </Text>
        </View>

        <Text style={styles.label}>To</Text>

        <View style={styles.selectBox}>
          <Text style={styles.selectText}>Hindi</Text>
          <Ionicons name="chevron-down" size={24} color="#8C95A1" />
        </View>

        <View style={styles.textBox}>
          <Text style={styles.inputText}>
            हमें तुरंत खाना और पानी{"\n"}चाहिए।
          </Text>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Ionicons name="volume-high" size={30} color="#DFFFE8" />
          <Text style={styles.buttonText}>Speak Translation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B12",
  },

  watermark: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "rgba(255,255,255,0.14)",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
    zIndex: 10,
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 85,
  },

  label: {
    color: "#B8BEC8",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 16,
  },

  selectBox: {
    height: 78,
    backgroundColor: "#121B26",
    borderRadius: 13,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#172433",
  },

  selectText: {
    color: "#E8ECF2",
    fontSize: 24,
    fontWeight: "800",
  },

  textBox: {
    height: 155,
    backgroundColor: "#101923",
    borderRadius: 13,
    paddingHorizontal: 22,
    paddingTop: 28,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: "#172433",
  },

  inputText: {
    color: "#E8ECF2",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 38,
  },

  button: {
    height: 76,
    backgroundColor: "#22A847",
    borderRadius: 16,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
});