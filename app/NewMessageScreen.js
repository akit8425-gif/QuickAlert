// app/NewMessageScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function NewMessageScreen() {
  const router = useRouter();
  const [type, setType] = useState("Emergency");
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050b12" />

      <View style={styles.phone}>
        <View style={styles.statusBar}>
          <Text style={styles.time}>9:41</Text>
          <Text style={styles.statusIcons}>▮▮  WiFi  ▰</Text>
        </View>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>New Message</Text>
          <View style={{ width: 28 }} />
        </View>

        <View style={styles.toBox}>
          <Text style={styles.toText}>To:</Text>
          <Text style={styles.nearbyText}>All Nearby</Text>
        </View>

        <Text style={styles.label}>Message Type</Text>

        <View style={styles.typeRow}>
          {["Emergency", "Normal", "Info"].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setType(item)}
              style={[
                styles.typeBtn,
                type === item && styles.activeTypeBtn,
              ]}
            >
              <Text
                style={[
                  styles.typeText,
                  type === item && styles.activeTypeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Message</Text>

        <View style={styles.messageBox}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor="#b9bec8"
            multiline
            maxLength={500}
            value={message}
            onChangeText={setMessage}
          />
          <Text style={styles.counter}>{message.length}/500</Text>
        </View>

        <Text style={styles.label}>Voice Input</Text>

        <View style={styles.voiceBox}>
          <TouchableOpacity style={styles.micBtn}>
            <Ionicons name="mic" size={30} color="#fff" />
          </TouchableOpacity>

          <View style={styles.waveRow}>
            {Array.from({ length: 36 }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.wave,
                  { height: 8 + ((i * 7) % 34) },
                ]}
              />
            ))}
          </View>
        </View>

        <Text style={styles.label}>AI Translation</Text>

        <View style={styles.translationRow}>
          <TouchableOpacity style={styles.langBox}>
            <Text style={styles.langText}>English</Text>
            <Ionicons name="chevron-down" size={22} color="#b8bec8" />
          </TouchableOpacity>

          <MaterialIcons name="arrow-forward" size={28} color="#aeb4bf" />

          <TouchableOpacity style={styles.langBox}>
            <Text style={styles.langText}>Hindi</Text>
            <Ionicons name="chevron-down" size={22} color="#b8bec8" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e9e9",
    alignItems: "center",
    justifyContent: "center",
  },

  phone: {
    width: "92%",
    maxWidth: 430,
    height: "96%",
    backgroundColor: "#050b12",
    borderRadius: 34,
    paddingHorizontal: 18,
    paddingTop: 18,
    shadowColor: "#000",
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 12,
  },

  statusBar: {
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  time: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  statusIcons: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  header: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },

  toBox: {
    height: 68,
    borderRadius: 14,
    backgroundColor: "#121a24",
    borderWidth: 1,
    borderColor: "#1e2937",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 26,
  },

  toText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginRight: 14,
  },

  nearbyText: {
    color: "#22c55e",
    fontSize: 21,
    fontWeight: "900",
  },

  label: {
    color: "#d5d8df",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 14,
  },

  typeRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 34,
  },

  typeBtn: {
    flex: 1,
    height: 62,
    borderRadius: 14,
    backgroundColor: "#151e28",
    alignItems: "center",
    justifyContent: "center",
  },

  activeTypeBtn: {
    backgroundColor: "rgba(239,68,68,0.14)",
    borderWidth: 2,
    borderColor: "#ef4444",
  },

  typeText: {
    color: "#d4d7dd",
    fontSize: 17,
    fontWeight: "800",
  },

  activeTypeText: {
    color: "#ff6464",
  },

  messageBox: {
    height: 150,
    backgroundColor: "#111923",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1e2937",
    padding: 16,
    marginBottom: 30,
  },

  input: {
    flex: 1,
    color: "#fff",
    fontSize: 17,
    textAlignVertical: "top",
  },

  counter: {
    color: "#aeb4bf",
    fontSize: 14,
    textAlign: "right",
    fontWeight: "700",
  },

  voiceBox: {
    height: 82,
    backgroundColor: "#111923",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1e2937",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 26,
  },

  micBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#5675ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  waveRow: {
    flex: 1,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    overflow: "hidden",
  },

  wave: {
    width: 3,
    borderRadius: 3,
    backgroundColor: "#9ca3af",
  },

  translationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  langBox: {
    width: "43%",
    height: 60,
    borderRadius: 12,
    backgroundColor: "#141d28",
    borderWidth: 1,
    borderColor: "#1f2937",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  langText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },

  sendBtn: {
    height: 68,
    borderRadius: 14,
    backgroundColor: "#22c55e",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  sendText: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "900",
  },
});