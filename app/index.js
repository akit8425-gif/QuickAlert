import { Text, View } from "react-native";
import WelcomeScreen from "./WelcomeScreen"
import Home from './Home';
import NewMessageScreen from './NewMessageScreen';
import VoiceScreen from './VoiceScreen';
import MessagesScreen from './MessagesScreen';
import MapScreen from './MapScreen';

import RoutingScreen from './RoutingScreen';
import AIPriorityScreen from './AIPriorityScreen';
import TranslationScreen from './TranslationScreen';
import NearbyUsersScreen from './NearbyUsersScreen';
import EmergencyAlertScreen from './EmergencyAlertScreen';
import ProfileScreen from './ProfileScreen';

export default function Index() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      
        <WelcomeScreen/>
         
    </View>
  );
}
