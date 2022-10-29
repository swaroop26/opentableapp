import {Box, Button, FormControl, Heading, HStack, Input, Pressable, Stack, Text, TextArea, VStack} from "native-base";
import {FlatList} from "react-native";
import {useContext, useState} from "react";
import {Context} from "../../context/ContextProvider";
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid';

import _ from "lodash";


const GuestDetails = ({props}) => {
  const [errors, setErrors] = useState({});
  const { navigateToReservations } = props;
  const { guestName,
    setGuestName,
    guestNotes,
    setGuestNotes,
    partySize,
    reservationTime,
    reservations,
    serReservations } = useContext(Context);

  const saveReservation = () =>{

    if(validate()){
      const newReservation = {
        id: uuid(),
        guestName,
        guestNotes,
        partySize,
        reservationTime,
      }
      serReservations([...reservations, newReservation]);
      navigateToReservations();

    }
  }

  const validate = () => {
    console.info('errors', errors)
    setErrors({})
    if (!_.isEmpty(guestName) && !_.isEmpty(guestNotes)) {
      setErrors({})
      return true
    }else {
      let errors = {};
      if(_.isEmpty(guestName)) {
        errors  = { ...errors, 'guestName': 'Guest Name is required'}
      }
      if(!guestName.trim().includes(' ')){
        errors  = { ...errors, 'guestName': 'Please enter first and last name'}
      }
      if(_.isEmpty(guestNotes)) {
        errors  = { ...errors, 'guestNotes': 'Guest Note are required'}
      }
      setErrors(errors)
    }
  };


  return (
    <Box  minH="90%">
      <Heading fontSize="4xl" p="4" pb="3">
        Guest Details
      </Heading>
      <FormControl isRequired isInvalid={!_.isEmpty(errors)} pl={5} pr={5}>
        <Box pt={2} pb={2} marginLeft="50%">
          <Button colorScheme="red" onPress={saveReservation}>Save</Button>
        </Box>
        <FormControl.Label _text={{bold: true}}>Guest Name</FormControl.Label>
        <Input size="lg" placeholder="Enter Guest Name" value={guestName} onChangeText={name => setGuestName(name)} />
        { !_.isEmpty(errors.guestName) && <FormControl.ErrorMessage>{errors.guestName}</FormControl.ErrorMessage>  }
        <FormControl.Label _text={{bold: true}} >Visitor Notes</FormControl.Label>
        <TextArea pt={4} numberOfLines={5}
                  size="lg"
                  placeholder="Enter Visitor Notes"
                  value={guestNotes}
                  onChangeText={notes => setGuestNotes(notes)}/>

        {!_.isEmpty(errors.guestNotes) && <FormControl.ErrorMessage>{errors.guestNotes}</FormControl.ErrorMessage>  }
      </FormControl>
    </Box>
  );
};
export default GuestDetails;