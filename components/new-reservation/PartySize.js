import {Box, Button, Heading, HStack, Icon, Pressable, Text, VStack} from "native-base";
import {FlatList} from "react-native";
import {Context} from "../../context/ContextProvider";
import {useContext} from "react";
import {Spacer} from "native-base/src/components/primitives/Flex";
import {MaterialIcons} from "@expo/vector-icons";
import {RESERVATION_TIME} from "../../constants/ReservationConstants";


const PartySize = ({navigation}) => {
  const data = [1 ,2 , 3 ,4 , 5];
  const { partySize, setPartySize, setStage } = useContext(Context);

  const updatePartySize = (partySize) =>{
    setPartySize(partySize);
    setStage(RESERVATION_TIME)
  }

  return (
    <Box maxH='90%' minH="90%">
      <Box>
        <Heading fontSize="4xl" p="4" pb="3">
          Select A Party Size
        </Heading>
      </Box>
      <FlatList data={data} renderItem={({ item }) =>
        <Pressable
          onPress={() => updatePartySize(item)}>
          <Box borderWidth={1} borderColor="muted.800" rounded="8" p="4" m="1" minH="20">
            <HStack alignSelf="center">
              {(partySize === item) && <Icon flex={1} size="lg" as={MaterialIcons} name="check-circle"  color={"white.500"}/>}
              <Text color="coolGray.800" fontSize="2xl" textAlign="center"> { item } </Text>
            </HStack>
          </Box>
        </Pressable>
      } keyExtractor={item => item} />
  </Box>
  );
};
export default PartySize;