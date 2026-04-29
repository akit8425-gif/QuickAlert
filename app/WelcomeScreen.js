import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.overlay}>

        {/* Signal Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.outerCircle} />
          <View style={styles.middleCircle} />
          <View style={styles.innerCircle} />
          <View style={styles.tower} />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Disaster Mesh</Text>
          <Text style={styles.subtitle}>Stay Connected. Stay Safe.</Text>

          <Text style={styles.description}>
            AI-Powered Offline{"\n"}Mesh Network
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/Login')} // ✅ fix lowercase
        >
          <Text style={styles.buttonText}>Get Started</Text>
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
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 80,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  outerCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1.5,
    borderColor: 'rgba(0,255,150,0.3)',
    position: 'absolute',
  },

  middleCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: 'rgba(0,255,150,0.5)',
    position: 'absolute',
  },

  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#00FF99',
    position: 'absolute',
  },

  tower: {
    width: 10,
    height: 45,
    backgroundColor: '#00FF99',
    borderRadius: 5,
  },

  textContainer: {
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtitle: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 6,
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    lineHeight: 22,
  },

  button: {
    backgroundColor: '#00C853',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});