import { TextInput } from "react-native";

export const Input = ({ placeholder, passEntry ,onChangeText, value}) => {

    return (
        <TextInput
            className="w-full h-12 px-4 mb-4 bg-gray-500  border-gray-400 focus:border-gray-500 focus:ring-gray-500
            rounded-lg shadow-sm p-2.5 text-gray-200"
            placeholderTextColor="#E0E0E0"
            placeholder={placeholder}
            secureTextEntry={passEntry}
            onChangeText={onChangeText}
            value={value}
        />
    );
}