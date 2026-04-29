import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack   screenOptions={{
        headerShown: false  
      }}>
   <Stack.Screen name="WelcomeScreen" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="NewMessageScreen" />
      <Stack.Screen name="VoiceScreen" />
      <Stack.Screen name="MessagesScreen" />
      <Stack.Screen name="MapScreen" />
      <Stack.Screen name="RoutingScreen" />
      <Stack.Screen name="AIPriorityScreen" />
      <Stack.Screen name="TranslationScreen" />
      <Stack.Screen name="NearbyUsersScreen" />
      <Stack.Screen name="EmergencyAlertScreen" />
      <Stack.Screen name="ProfileScreen" />
   
      </Stack>;
}
