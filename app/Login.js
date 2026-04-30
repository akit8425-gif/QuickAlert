 import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        {/* 🔙 Back Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#aaa" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#aaa" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Divider */}
        <Text style={styles.or}>OR</Text>

        {/* Google Login */}
        <TouchableOpacity style={styles.googleBtn}>
          <Ionicons name="logo-google" size={20} color="#fff" />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Facebook Login */}
        <TouchableOpacity style={styles.fbBtn}>
          <Ionicons name="logo-facebook" size={20} color="#fff" />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Signup Redirect */}
        <TouchableOpacity onPress={() => router.push('./Signup')}>
          <Text style={styles.signup}>
            Don’t have an account?{' '}
            <Text style={{ color: '#00FF99' }}>SignUp</Text>
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
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 25,
    justifyContent: 'center',
  },

  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#aaa',
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    color: '#fff',
    padding: 12,
  },

  loginBtn: {
    backgroundColor: '#00C853',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  or: {
    color: '#aaa',
    textAlign: 'center',
    marginVertical: 15,
  },

  googleBtn: {
    flexDirection: 'row',
    backgroundColor: '#DB4437',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 10,
  },

  fbBtn: {
    flexDirection: 'row',
    backgroundColor: '#1877F2',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  socialText: {
    color: '#fff',
    fontWeight: '500',
  },

  signup: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
});