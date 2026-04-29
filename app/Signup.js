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
import { useRouter } from "expo-router";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function NewMessageScreen() {
  const [type, setType] = useState("Emergency");
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* 🔥 HEADER FIXED */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>New Message</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* CARD */}
      <View style={styles.card}>

        <Text style={styles.label}>To:</Text>
        <View style={styles.inputBox}>
          <Text style={styles.highlight}>All Nearby</Text>
        </View>

        <Text style={styles.label}>Message Type</Text>
        <View style={styles.row}>
          {["Emergency", "Normal", "Info"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.typeBtn,
                type === item && styles.activeBtn,
              ]}
              onPress={() => setType(item)}
            >
              <Text
                style={[
                  styles.typeText,
                  type === item && styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Message</Text>
        <View style={styles.textArea}>
          <TextInput
            placeholder="Type your message..."
            placeholderTextColor="#888"
            multiline
            value={message}
            onChangeText={setMessage}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Send Message</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F14",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#0B0F14", // 👈 important
    zIndex: 10, // 👈 ensures visible
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#111720",
    margin: 15,
    padding: 15,
    borderRadius: 20,
  },

  label: {
    color: "#aaa",
    marginTop: 10,
    marginBottom: 5,
  },

  inputBox: {
    backgroundColor: "#1a2330",
    padding: 12,
    borderRadius: 10,
  },

  highlight: {
    color: "#4ade80",
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  typeBtn: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1a2330",
    borderRadius: 10,
    alignItems: "center",
  },

  activeBtn: {
    borderWidth: 1,
    borderColor: "#ff4d4d",
  },

  typeText: {
    color: "#aaa",
  },

  activeText: {
    color: "#ff4d4d",
  },

  textArea: {
    backgroundColor: "#1a2330",
    borderRadius: 10,
    padding: 10,
    height: 100,
  },

  input: {
    color: "#fff",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#22c55e",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});