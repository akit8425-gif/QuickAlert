import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const messages = [
  {
    id: "1",
    type: "Emergency",
    text: "Need medical help at\nSector 7, Building A!",
    time: "10:30 AM",
    color: "#FF4B5C",
  },
  {
    id: "2",
    type: "Normal",
    text: "We are moving to safe\nlocation.",
    time: "10:25 AM",
    color: "#FACC15",
  },
  {
    id: "3",
    type: "Info",
    text: "Water available at\nCommunity Center.",
    time: "10:20 AM",
    color: "#38A9FF",
  },
  {
    id: "4",
    type: "Normal",
    text: "Anyone have extra\nbattery?",
    time: "10:15 AM",
    color: "#FACC15",
  },
];

const tabs = ["All", "Emergency", "Normal", "Info"];

export default function MessagesScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");

  const filteredMessages =
    activeTab === "All"
      ? messages
      : messages.filter((item) => item.type === activeTab);

  const renderMessage = ({ item }) => (
    <View style={styles.card}>
      <View style={[styles.leftBar, { backgroundColor: item.color }]} />

      <View style={styles.cardContent}>
        <View style={styles.cardTop}>
          <Text
            style={[
              styles.badge,
              {
                color: item.color,
                backgroundColor: item.color + "22",
              },
            ]}
          >
            {item.type}
          </Text>

          <Text style={styles.time}>{item.time}</Text>
        </View>

        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050B12" />

      <Text style={styles.title}>Messages</Text>

      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

       {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
      
              <TouchableOpacity onPress={() => router.replace('/Home')} style={styles.navItem}>
                <Ionicons name="home" size={22} color="#00FF99" />
                <Text style={[styles.navText, { color: '#00FF99' }]}>Home</Text>
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => router.push('/MessagesScreen')} style={styles.navItem}>
                <Ionicons name="chatbubble-outline" size={22} color="#aaa" />
                <Text style={styles.navText}>Messages</Text>
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => router.push('/MapScreen')} style={styles.navItem}>
                <Ionicons name="map-outline" size={22} color="#aaa" />
                <Text style={styles.navText}>Map</Text>
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => router.push('/EmergencyAlertScreen')} style={styles.navItem}>
                <Ionicons name="notifications-outline" size={22} color="#aaa" />
                <Text style={styles.navText}>Alerts</Text>
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => router.push('/ProfileScreen')} style={styles.navItem}>
                <Ionicons name="person-outline" size={22} color="#aaa" />
                <Text style={styles.navText}>Profile</Text>
              </TouchableOpacity>
      
            </View>
    </SafeAreaView>
  );
}

function NavItem({ icon, label, active, onPress }) {
  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons
        name={icon}
        size={24}
        color={active ? "#57F287" : "#7A828D"}
      />
      <Text style={[styles.navText, active && styles.activeNavText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B12",
    paddingHorizontal: 18,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 32,
    marginBottom: 24,
  },

  tabContainer: {
    height: 48,
    backgroundColor: "#07111B",
    borderRadius: 12,
    flexDirection: "row",
    padding: 4,
    marginBottom: 20,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: "#10201A",
    borderWidth: 1,
    borderColor: "#1F9D55",
  },

  tabText: {
    color: "#A3AAB4",
    fontSize: 15,
    fontWeight: "700",
  },

  activeTabText: {
    color: "#57F287",
  },

  listContent: {
    paddingBottom: 105,
  },

  card: {
    minHeight: 130,
    backgroundColor: "#101923",
    borderRadius: 12,
    marginBottom: 14,
    overflow: "hidden",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#152230",
  },

  leftBar: {
    width: 5,
  },

  cardContent: {
    flex: 1,
    padding: 16,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  badge: {
    fontSize: 16,
    fontWeight: "800",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  time: {
    color: "#B2B8C2",
    fontSize: 15,
    fontWeight: "600",
  },

  messageText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    marginTop: 14,
  },

  bottomNav: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 18,
    height: 72,
    backgroundColor: "#0C141D",
    borderRadius: 22,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#101C28",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: 65,
    height: 60,
  },

  navText: {
    color: "#7A828D",
    fontSize: 12,
    fontWeight: "700",
  },

  activeNavText: {
    color: "#57F287",
  },
});