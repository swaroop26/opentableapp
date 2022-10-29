import {View} from "react-native";
import {Box, HStack, Icon, IconButton, StatusBar, Text} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";

const AppBar = () => (
    <>
        <Box safeAreaTop bg="#91949a" />
        <HStack bg="#2d333f" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
            <HStack alignItems="center" space={[2, 3]}>
                <IconButton icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white" />} />
                <Text color="white" fontSize="lg" fontWeight="bold">
                    OpenTable
                </Text>
            </HStack>
        </HStack>
    </>
);
export default AppBar;