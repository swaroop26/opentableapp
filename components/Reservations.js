import React, {useContext} from "react";
import {Badge, Box, Button, Heading, HStack, Pressable, Text, VStack} from "native-base";
import {Context} from "../context/ContextProvider";
import {FlatList} from "react-native";
import {PARTY_SIZE} from "../constants/ReservationConstants";

import _ from "lodash";
import moment from "moment";

const Reservations = ({ navigation }) => {
  const { reservations,
    setPartySize,
    setReservationTime,
    setGuestName,
    setGuestNotes,
    setStage
  } = useContext(Context);

  const startNewReservation = () =>{
    setPartySize(0);
    setReservationTime("");
    setGuestName("");
    setGuestNotes("");
    setStage(PARTY_SIZE)
    navigation.navigate('NewReservation')
  }

  const viewReservationDetails = (reservation) =>{
    navigation.navigate('ReservationDetails', { reservationId : reservation.id})
  }

  const getSortedReservations = () =>{
    const sorted =  reservations.sort((a, b) => moment(a.reservationTime,'hh:mm A').isAfter(moment(b.reservationTime, 'hh:mm A'))? 1 : -1);
    return sorted;
  }

  return (
    <Box>
      <Heading fontSize="4xl" p="4" pb="3">
        Reservations
      </Heading>
      <Box pt={4} pb={4} marginLeft="50%" color={"red-light"} >
        <Button colorScheme="red"
          onPress={() => startNewReservation()}>Create</Button>
      </Box>

      {_.isEmpty(reservations)
        &&
        <HStack  mx={{base: "auto",md: "0"}}>
          <Badge size={'lg'} colorScheme="info">No Reservations to display</Badge>
        </HStack>
      }

      <FlatList data={getSortedReservations()} renderItem={({ item }) =>
        <Pressable
          onPress={() => viewReservationDetails(item)}>
          <Box borderWidth={1} borderColor="grey.400" margin="1" rounded="8" px="2" py="2">
            <HStack space={[2, 3]}>
              <Text color="coolGray.800" fontSize="2xl" maxW="20%" w="20%"> {item.partySize} </Text>
              <VStack>
                <Text color="coolGray.800" fontSize="2xl" bold> {item.guestName}</Text>
                <Text color="coolGray.600" fontSize="lg">{item.reservationTime} </Text>
              </VStack>
            </HStack>
          </Box>
        </Pressable>
      } keyExtractor={item => item.id} />
  </Box>
  );
};


export default Reservations;