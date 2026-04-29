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
  Alert,
} from "react-native";
import Voice from "@react-native-voice/voice";
import Icon from "react-native-vector-icons/MaterialIcons";

const waves = [
  20, 45, 70, 35, 90, 55, 25, 80, 40, 65,
  30, 75, 50, 95, 35, 60, 25, 85, 45, 70,
  20, 55, 90, 40, 65, 30, 75, 50, 85, 35,
];

export default function VoiceScreen() {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const [seconds, setSeconds] = useState(0);

  const requestPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

    return true;
  };

  useEffect(() => {
    Voice.onSpeechStart = () => {
      console.log("Speech started");
    };

    Voice.onSpeechEnd = () => {
      console.log("Speech ended");
      setIsListening(false);
    };

    Voice.onSpeechResults = (event) => {
      setText(event?.value?.[0] || "");
    };

    Voice.onSpeechPartialResults = (event) => {
      setText(event?.value?.[0] || "");
    };

    Voice.onSpeechError = (error) => {
      console.log("Speech Error:", error);
      setIsListening(false);
    };

    return () => {
      Voice.destroy().then(() => Voice.removeAllListeners());
    };
  }, []);

  useEffect(() => {
    let interval = null;

    if (isListening) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isListening]);

  const startListening = async () => {
    try {
      const hasPermission = await requestPermission();

      if (!hasPermission) {
        Alert.alert("Permission Required", "Microphone permission is needed.");
        return;
      }

      setText("");
      setSeconds(0);
      setIsListening(true);

      await Voice.start("en-US");
    } catch (error) {
      console.log("Voice start error:", error);
      setIsListening(false);

      Alert.alert(
        "Voice Error",
        "Voice module is not working. Use development build, not Expo Go/Web."
      );
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.log("Voice stop error:", error);
    } finally {
      setIsListening(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      <Text style={styles.title}>Voice to Text</Text>

      <Text style={styles.listening}>
        {isListening ? "Listening..." : "Tap to Start"}
      </Text>

      <View style={styles.waveBox}>
        {waves.map((height, index) => (
          <View
            key={index}
            style={[
              styles.wave,
              {
                height: isListening ? height : 20,
                opacity: isListening ? 1 : 0.35,
              },
            ]}
          />
        ))}
      </View>

      <Text style={styles.timer}>
        00:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>

      <TouchableOpacity
        style={[styles.mic, isListening && styles.micActive]}
        onPress={isListening ? stopListening : startListening}
        activeOpacity={0.8}
      >
        <Icon name={isListening ? "stop" : "mic"} size={35} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.tap}>{isListening ? "Tap to Stop" : "Tap to Speak"}</Text>

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
    fontSize: 24,
    fontWeight: "700",
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
    justifyContent: "center",
    height: 110,
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
    fontWeight: "700",
    marginBottom: 30,
  },
  mic: {
    backgroundColor: "#1E9BFF",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  micActive: {
    backgroundColor: "#FF3B30",
  },
  tap: {
    color: "#aaa",
    marginTop: 12,
    fontSize: 15,
  },
  outputBox: {
    marginTop: 30,
    backgroundColor: "#1A1F2A",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    minHeight: 70,
  },
  output: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});