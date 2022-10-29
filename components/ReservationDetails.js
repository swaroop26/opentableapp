import React, {useContext} from "react";
import {Box, Button, Divider, Heading, HStack, Pressable, Text, View, VStack} from "native-base";
import ListItem from "native-base/src/components/primitives/List/ListItem";
import {Context} from "../context/ContextProvider";
const ReservationDetails = ({ route, navigation }) => {
  const { reservationId } = route.params;
  const { reservations } = useContext(Context);
  const reservation = reservations
    .find(reservation => reservation.id === reservationId);

  console.info(route, reservationId, reservations, reservation)

  return (
    <Box>
      <Heading fontSize="4xl" p="4" pb="3">
        Reservations
      </Heading>
      <Box pt={2} pb={2} marginLeft="50%" fontSize="lg" bold>
        <Button size='md'
          onPress={() => navigation.navigate('Reservations')}>Close</Button>
      </Box>
      <Box>
        <HStack pb={2} m={5}>
          <VStack>
            <Text color="coolGray.800" fontSize="2xl" bold> {reservation.guestName} </Text>
            <Text color="coolGray.600" fontSize="lg"> Party Size: {reservation.guestName} </Text>
            <Text color="coolGray.600" fontSize="lg"> Time: {reservation.reservationTime} </Text>
          </VStack>
        </HStack>
        <HStack pb={2} m={5}>
          <VStack>
            <Text color="coolGray.800" fontSize="2xl" bold> Visitor Notes </Text>
            <Text color="coolGray.600" fontSize="lg"> {reservation.guestNotes}</Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};


export default ReservationDetails;