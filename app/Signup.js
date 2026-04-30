import React from "react";
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

export default function Signup() {
  const router = useRouter();

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
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => router.push("/Login")}
          >
            <Text style={styles.signupText}>Sign Up</Text>
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

  signupBtn: {
    backgroundColor: "#00C853",
    height: 49,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
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