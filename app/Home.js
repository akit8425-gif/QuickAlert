import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Header */}
        <Text style={styles.header}>Disaster Mesh</Text>

        {/* Network Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Network Status</Text>
          <Text style={styles.connected}>Connected</Text>
          <Text style={styles.info}>Peers: 12 | Range: 120m</Text>
        </View>

        {/* AI Priority */}
        <Text style={styles.section}>AI Priority System</Text>

        <View style={styles.priorityRow}>
          <View style={[styles.priorityBox, styles.red]}>
            <Text style={[styles.priorityText, styles.redText]}>High Priority</Text>
            <Text style={styles.priorityNumber}>3</Text>
          </View>

          <View style={[styles.priorityBox, styles.yellow]}>
            <Text style={[styles.priorityText, styles.yellowText]}>Normal</Text>
            <Text style={styles.priorityNumber}>8</Text>
          </View>

          <View style={[styles.priorityBox, styles.blue]}>
            <Text style={[styles.priorityText, styles.blueText]}>Info</Text>
            <Text style={styles.priorityNumber}>12</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.section}>Quick Actions</Text>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={[styles.actionBox, styles.blueBg]}>
            <Ionicons name="mail-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>New Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionBox, styles.purpleBg]}>
            <Ionicons name="mic-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Voice Message</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={[styles.actionBox, styles.redBg]}>
            <Ionicons name="warning-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Emergency Alert</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionBox, styles.darkBlueBg]}>
            <Ionicons name="people-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Nearby Users</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f1a',
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 100, // 👈 important (nav ke liye space)
  },

  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#141a2e',
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
  },

  cardTitle: {
    color: '#aaa',
    marginBottom: 10,
  },

  connected: {
    color: '#00FF99',
    fontSize: 22,
    fontWeight: 'bold',
  },

  info: {
    color: '#aaa',
    marginTop: 5,
  },

  section: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },

  priorityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  priorityBox: {
    flex: 1,
    padding: 12,
    borderRadius: 14,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
  },

  red: { borderColor: '#ff4d4d' },
  yellow: { borderColor: '#ffcc00' },
  blue: { borderColor: '#3399ff' },

  redText: { color: '#ff4d4d' },
  yellowText: { color: '#ffcc00' },
  blueText: { color: '#3399ff' },

  priorityNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },

  actionsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  actionBox: {
    flex: 1,
    padding: 16,
    borderRadius: 14,
    marginHorizontal: 5,
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    marginTop: 6,
  },

  blueBg: { backgroundColor: '#2a3f7d' },
  purpleBg: { backgroundColor: '#5a2a7d' },
  redBg: { backgroundColor: '#7d2a2a' },
  darkBlueBg: { backgroundColor: '#2a2f7d' },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#111827',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  navItem: {
    alignItems: 'center',
  },

  navText: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
});