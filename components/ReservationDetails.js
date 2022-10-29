import React, {useContext} from "react";
import {Box, Button, Container, Heading, HStack, Text, VStack} from "native-base";
import {Context} from "../context/ContextProvider";

const ReservationDetails = ({ route, navigation }) => {
  const { reservationId } = route.params;
  const { reservations } = useContext(Context);
  const reservation = reservations
    .find(reservation => reservation.id === reservationId);

  return (
    <Box>
      <Heading fontSize="4xl" p="4" pb="3">
        Reservations
      </Heading>
      <Box pt={2} pb={4} marginLeft="50%" fontSize="lg" bold>
        <Button size='md' colorScheme={"red"}
          onPress={() => navigation.navigate('Reservations')}>Close</Button>
      </Box>
      <Box borderWidth={0.5} borderColor="grey.500" margin="1" rounded="8" ml="2" mr="2" >
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