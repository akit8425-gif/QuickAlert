import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://192.168.1.21:5000/api/auth/signup";

  const handleSignup = async () => {
    setMessage("");
    setMessageType("");

    if (!fullName || !email || !password || !confirmPassword) {
      setMessage("All fields are required");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          confirmPassword,
        }),
      });

      const text = await response.text();

      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch (err) {
        console.log("Backend ne JSON nahi bheja:", text);
        setMessage("Backend JSON nahi bhej raha. Route/server check karo.");
        setMessageType("error");
        return;
      }

      if (!response.ok) {
        setMessage(data.message || "Signup failed");
        setMessageType("error");
        return;
      }

      setMessage(data.message || "Signup successful");
      setMessageType("success");

      if (data.token) {
        await AsyncStorage.setItem("token", data.token);
      }

      if (data.user) {
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
      }

        // ✅ YAHAN CHECK KARO
const token = await AsyncStorage.getItem("token");
console.log("Saved Token 👉", token);

      setTimeout(() => {
        router.push("/Login");
      }, 700);
    } catch (error) {
      console.log("Signup Error:", error);
      setMessage("Network error: IP/server/port/firewall check karo");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.formBox}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          {message ? (
            <Text
              style={[
                styles.messageText,
                messageType === "success"
                  ? styles.successText
                  : styles.errorText,
              ]}
            >
              {message}
            </Text>
          ) : null}

          <TouchableOpacity
            style={[styles.signupBtn, loading && styles.disabledBtn]}
            onPress={handleSignup}
            disabled={loading}
          >
            <Text style={styles.signupText}>
              {loading ? "Signing up..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity style={styles.googleBtn}>
            <Ionicons name="logo-google" size={20} color="#fff" />
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fbBtn}>
            <Ionicons name="logo-facebook" size={20} color="#fff" />
            <Text style={styles.socialText}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/Login")}>
            <Text style={styles.loginLink}>
              Already have an account?{" "}
              <Text style={{ color: "#00FF99" }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.78)",
    paddingHorizontal: 25,
  },

  header: {
    position: "absolute",
    top: 50,
    left: 22,
    zIndex: 10,
  },

  formBox: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaa",
    fontSize: 15,
    marginTop: 4,
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 14,
    height: 42,
  },

  input: {
    flex: 1,
    color: "#fff",
    paddingHorizontal: 10,
    fontSize: 14,
  },

  messageText: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "600",
  },

  errorText: {
    color: "#ff4d4d",
  },

  successText: {
    color: "#00FF99",
  },

  signupBtn: {
    backgroundColor: "#00C853",
    height: 49,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  disabledBtn: {
    opacity: 0.6,
  },

  signupText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  or: {
    color: "#aaa",
    textAlign: "center",
    marginVertical: 15,
  },

  googleBtn: {
    flexDirection: "row",
    backgroundColor: "#DB4437",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 10,
  },

  fbBtn: {
    flexDirection: "row",
    backgroundColor: "#1877F2",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  socialText: {
    color: "#fff",
    fontWeight: "600",
  },

  loginLink: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 22,
  },
});