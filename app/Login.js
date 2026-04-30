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

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://192.168.1.21:5000/api/auth/login";

  const handleLogin = async () => {
    setMessage("");
    setMessageType("");

    if (!email || !password) {
      setMessage("Email and password are required");
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
          email,
          password,
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

      console.log("🔥 API Response 👉", data);

      if (!response.ok) {
        setMessage(data.message || "Login failed");
        setMessageType("error");
        return;
      }

      setMessage(data.message || "Login successful");
      setMessageType("success");

      if (data.token) {
        await AsyncStorage.setItem("token", data.token);
      }

      if (data.user) {
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
      }

      const savedToken = await AsyncStorage.getItem("token");
      const savedUser = await AsyncStorage.getItem("user");

      console.log("✅ Saved Token 👉", savedToken);
      console.log("✅ Saved User 👉", savedUser);

      setTimeout(() => {
        router.push("/Home");
      }, 700);
    } catch (error) {
      console.log("Login Error:", error);
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
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

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

        {message ? (
          <Text
            style={[
              styles.messageText,
              messageType === "success" ? styles.successText : styles.errorText,
            ]}
          >
            {message}
          </Text>
        ) : null}

        <TouchableOpacity
          style={[styles.loginBtn, loading && styles.disabledBtn]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginText}>
            {loading ? "Logging in..." : "Login"}
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

        <TouchableOpacity onPress={() => router.push("/Signup")}>
          <Text style={styles.signup}>
            Don’t have an account?{" "}
            <Text style={{ color: "#00FF99" }}>SignUp</Text>
          </Text>
        </TouchableOpacity>
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
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 25,
    justifyContent: "center",
  },

  header: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaa",
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    color: "#fff",
    padding: 12,
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

  loginBtn: {
    backgroundColor: "#00C853",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  disabledBtn: {
    opacity: 0.6,
  },

  loginText: {
    color: "#fff",
    fontWeight: "bold",
  },

  or: {
    color: "#aaa",
    textAlign: "center",
    marginVertical: 15,
  },

  googleBtn: {
    flexDirection: "row",
    backgroundColor: "#DB4437",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    gap: 10,
  },

  fbBtn: {
    flexDirection: "row",
    backgroundColor: "#1877F2",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  socialText: {
    color: "#fff",
    fontWeight: "500",
  },

  signup: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});