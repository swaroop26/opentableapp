import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from "./components/AppBar";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Reservations from "./components/Reservations";
import {SafeAreaProvider} from "react-native-safe-area-context";
import PartySize from "./components/new-reservation/PartySize";
import ReservationDetails from "./components/ReservationDetails";
import ReservationTime from "./components/new-reservation/ReservationTime";
import GuestDetails from "./components/new-reservation/GuestDetails";
import ContextProvider from "./context/ContextProvider";
import NewReservation from "./components/new-reservation/NewReservation";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ContextProvider>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <AppBar></AppBar>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Reservations" screenOptions={{headerShown: false}}>
              <Stack.Screen name="Reservations" component={Reservations} />
              <Stack.Screen name="NewReservation" component={NewReservation} />
              <Stack.Screen name="ReservationDetails" component={ReservationDetails} />
              <Stack.Screen name="ReservationTime" component={ReservationTime} />
              <Stack.Screen name="GuestDetails" component={GuestDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
