import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  PermissionsAndroid,
  Platform,
} from "react-native";
import Voice from "@react-native-voice/voice";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function VoiceScreen() {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const [seconds, setSeconds] = useState(0);

  // 🎤 Permission
  const requestPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  // 🎧 Voice Setup
  useEffect(() => {
    Voice.onSpeechResults = (event) => {
      setText(event.value[0]);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // ⏱ Timer
  useEffect(() => {
    let interval;
    if (isListening) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isListening]);

  // ▶️ Start
  const startListening = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    setIsListening(true);
    setText("");
    await Voice.start("en-US"); // change to hi-IN for Hindi
  };

  // ⛔ Stop
  const stopListening = async () => {
    setIsListening(false);
    await Voice.stop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Title */}
      <Text style={styles.title}>Voice to Text</Text>

      {/* Listening */}
      <Text style={styles.listening}>
        {isListening ? "Listening..." : "Tap to Start"}
      </Text>

      {/* Fake Wave UI */}
      <View style={styles.waveBox}>
        {Array.from({ length: 30 }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.wave,
              { height: Math.random() * 100 + 10 },
            ]}
          />
        ))}
      </View>

      {/* Timer */}
      <Text style={styles.timer}>
        00:{seconds < 10 ? "0" + seconds : seconds}
      </Text>

      {/* Mic */}
      <TouchableOpacity
        style={styles.mic}
        onPress={isListening ? stopListening : startListening}
      >
        <Icon name="mic" size={35} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.tap}>
        {isListening ? "Tap to Stop" : ""}
      </Text>

      {/* Output */}
      <View style={styles.outputBox}>
        <Text style={styles.output}>
          {text || "AI is converting speech to text..."}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B12",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
  },
  listening: {
    color: "#aaa",
    fontSize: 18,
    marginBottom: 20,
  },
  waveBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  wave: {
    width: 4,
    marginHorizontal: 2,
    backgroundColor: "#1E9BFF",
    borderRadius: 5,
  },
  timer: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 30,
  },
  mic: {
    backgroundColor: "#1E9BFF",
    padding: 20,
    borderRadius: 100,
  },
  tap: {
    color: "#aaa",
    marginTop: 10,
  },
  outputBox: {
    marginTop: 30,
    backgroundColor: "#1A1F2A",
    padding: 15,
    borderRadius: 10,
  },
  output: {
    color: "#fff",
  },
});

//<uses-permission android:name="android.permission.RECORD_AUDIO" />