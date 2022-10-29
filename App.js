import {StyleSheet} from 'react-native';
import AppBar from "./components/AppBar";
import {createNativeStackNavigator} from  "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Reservations from "./components/Reservations";
import {SafeAreaProvider} from "react-native-safe-area-context";
import ReservationDetails from "./components/ReservationDetails";
import ReservationTime from "./components/new-reservation/ReservationTime";
import GuestDetails from "./components/new-reservation/GuestDetails";
import ContextProvider from "./context/ContextProvider";
import NewReservation from "./components/new-reservation/NewReservation";
import {NativeBaseProvider} from "native-base";

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
