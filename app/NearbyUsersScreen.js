import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const users = [
  { id: "1", name: "User_01", distance: "25m" },
  { id: "2", name: "User_02", distance: "30m" },
  { id: "3", name: "User_03", distance: "45m" },
  { id: "4", name: "User_04", distance: "60m" },
  { id: "5", name: "User_05", distance: "85m" },
  { id: "6", name: "User_06", distance: "100m" },
];

export default function NearbyUsersScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.iconCircle}>
          <Ionicons name="person" size={26} color="#3BE477" />
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <Text style={styles.distance}>{item.distance}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      {/* Watermark */}
      <Text style={styles.watermark}>ONLY FRONTEND</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 40, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B12",
    paddingHorizontal: 20,
  },

  watermark: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "rgba(255,255,255,0.14)",
    fontSize: 12,
    fontWeight: "900",
    zIndex: 10,
  },

  card: {
    height: 80,
    backgroundColor: "#101923",
    borderRadius: 14,
    paddingHorizontal: 18,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#162433",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#3BE477",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    color: "#E8ECF2",
    fontSize: 20,
    fontWeight: "800",
  },

  distance: {
    color: "#B8BEC8",
    fontSize: 18,
    fontWeight: "700",
  },

  button: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: "#22A847",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },
});