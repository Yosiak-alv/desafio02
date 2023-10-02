import React, { useState } from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { PrimaryButton } from './PrimaryButton';

export const ModalComponent = ({ visible, onClose, part }) => {
    
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View className="flex-1 items-center justify-center ">
                
                <View className="bg-gray-200 p-8 rounded-lg">

                    <Text className="text-gray-700 text-lg text-center">
                        <Text className="text-gray-700 text-lg font-bold">Brand: </Text>{part.brand}
                    </Text><Text>{`\n`}</Text>

                    <Text className="text-gray-700 text-lg text-center">
                        <Text className="text-gray-700 text-lg font-bold">Type: </Text>{part.type}
                    </Text><Text>{`\n`}</Text>

                    <Text className="text-gray-700 text-lg text-center">
                        <Text className="text-gray-700 text-lg font-bold">SerialNumber: </Text> {part.serialNumber}
                    </Text><Text>{`\n`}</Text>

                    <Text className="text-gray-700 text-lg text-center">
                        <Text className="text-gray-700 text-lg font-bold">Price: </Text> {part.price}
                    </Text><Text>{`\n`}</Text>

                    <Text className="text-gray-700 text-lg text-center">
                        <Text className="text-gray-700 text-lg font-bold">Date: </Text> {part.date}
                    </Text><Text>{`\n`}</Text>

                    <PrimaryButton message={'Close'} onPress={onClose}/>

                </View>
            </View>
        </Modal>
    );
};
