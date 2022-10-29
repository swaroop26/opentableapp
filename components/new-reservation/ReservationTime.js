import {Box, Heading, HStack, Icon, Pressable, Text, VStack} from "native-base";
import {FlatList} from "react-native";
import {Context} from "../../context/ContextProvider";
import {useContext} from "react";
import useReservationTime from "../../hooks/useReservationTime";
import {GUEST_DETAILS} from "../../constants/ReservationConstants";
import {MaterialIcons} from "@expo/vector-icons";

const ReservationTime = ({navigation}) => {
  const { reservationTime, setReservationTime, setStage } = useContext(Context);
  const { timeSlots, availableSlots , addMinutes } = useReservationTime();

  const updateReservationTime = (time) =>{
    if(isTimeAvailable(time)){
      setReservationTime(time);
      setStage(GUEST_DETAILS)
      //navigation.navigate('GuestDetails')
    }
  }

  const isTimeAvailable = ( time) =>
    availableSlots().some(slot => slot === time);

  const getBorderColor = (time) =>{
    if(!isTimeAvailable(time)){
      return 'gray.500'
    }else if(
      !isTimeAvailable(addMinutes(time, 15))
      || !isTimeAvailable(addMinutes(time, 30))
      || !isTimeAvailable(addMinutes(time, 45))
    ){
      return 'amber.600'
    }else{
      return 'green.600'
    }
  }

  return (
    <Box maxH='90%' minH="90%">
      <Box>
        <Heading fontSize="3xl" p="4" pb="3">
          Select Reservation Time
        </Heading>
      </Box>
      <FlatList data={timeSlots} renderItem={({ item }) =>
        <Pressable
          onPress={() => updateReservationTime(item)}>
          <Box borderWidth={1} backgroundColor={getBorderColor(item)} rounded="8" p="4" m="1" minH="20">
            {(reservationTime === item) && <Icon flex={1} size="lg" as={MaterialIcons} name="check-circle"  color={"white.500"}/>}
            <VStack alignSelf="center">
              <Text color="white" fontSize="2xl" textAlign="center"> { item } </Text>
              { !isTimeAvailable(item) && <Text color="white"  fontSize="xl" textAlign="center"> Not Available </Text> }
            </VStack>
          </Box>
        </Pressable>
      } keyExtractor={item => item} />
  </Box>
  );
};
export default ReservationTime;