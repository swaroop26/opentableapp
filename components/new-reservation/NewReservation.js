import PartySize from "./PartySize";
import {Box, Button, HStack, Icon, Text} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";
import {Spacer} from "native-base/src/components/primitives/Flex";
import ReservationTime from "./ReservationTime";
import {Context} from "../../context/ContextProvider";
import {GUEST_DETAILS, PARTY_SIZE, RESERVATION_TIME} from "../../constants/ReservationConstants";
import {useContext} from "react";
import GuestDetails from "./GuestDetails";

const NewReservation = ({navigation}) => {
  const {stage, setStage} = useContext(Context);

  const navigateBack = () =>{
    if(stage === GUEST_DETAILS){
      setStage(RESERVATION_TIME)
    }else if(stage === RESERVATION_TIME){
      setStage(PARTY_SIZE)
    }else {
      navigation.navigate('Reservations')
    }
  }

  const navigateToReservations = () =>{
    navigation.navigate('Reservations')
  }

  return (
    <Box>
      { (stage === PARTY_SIZE) && <PartySize></PartySize> }
      { (stage === RESERVATION_TIME) && <ReservationTime></ReservationTime> }
      { (stage === GUEST_DETAILS) && <GuestDetails props = {{navigateToReservations}}></GuestDetails> }

      <Box p={4} minW={"100%"}>
        <HStack flexDirection={"row"} >
          <Button size={"lg"} variant="ghost" onPress={navigateBack}>
            <HStack flexDirection={"row"}  >
              <Icon size="lg" as={MaterialIcons} name="navigate-before"  color={"blue.500"}/>
              <Text  color={"blue.500"}>Back</Text>
            </HStack>
          </Button>
          <Spacer></Spacer>
          <Button size={"lg"} variant="ghost"  onPress={navigateToReservations}>
            <HStack flexDirection={"row"}  >
              <Icon size="lg" as={MaterialIcons} name="close" color={"blue.500"}/>
              <Text  color={"blue.500"}>Cancel</Text>
            </HStack>
          </Button>
        </HStack>

      </Box>

    </Box>
  );

};

export default NewReservation;