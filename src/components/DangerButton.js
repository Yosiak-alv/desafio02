import { Text,Pressable } from "react-native";

export const DangerButton = ({message , onPress}) => {

    return (
        <Pressable 
            className="px-8 py-2.5 rounded-md 
            tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 text-center
            bg-red-500 hover:bg-red-500 active:bg-red-500 focus:bg-red-500 focus:ring-red-500"
            onPress={onPress}
        >
           <Text className="font-extrabold text-sm text-gray-200 uppercase text-center">{message}</Text>
        </Pressable>
    );
}