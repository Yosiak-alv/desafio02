import { Text, View } from 'react-native';
import { Layout } from '../../layout/Layout';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import brandsData from '../../../brands.json';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useState } from 'react';
import uuid from 'react-native-uuid';
export const CreateParts = ({navigation}) => {

    const [newPart, setNewPart] = useState({
        id: uuid.v1(),
        type: '',
        brand: '',
        serialNumber: '',
        price: '',
        date: '',
    });

    const [dateError, setDateError] = useState('')


    console.log(newPart);
    
    const handleAddPart = () => {
        const dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

        if (newPart.type != '' && newPart.date != ''  && newPart.brand != '' && newPart.serialNumber != '' && newPart.price != '' ) {
            //setParts([...parts, newPart]);
            if(dateFormat.test(newPart.date)){
                navigation.navigate('PartsList',{level:'success',flashMessage:'Part Added Successfuly! .', part:newPart});
            setNewPart({
               
                name: '',
                type: '',
                brand: '',
                serialNumber: '',
                price: '',
                date: '',
            });
            setDateError('');
            } else {
                setDateError('Please enter a valid date in the following format "day/month/year" ')
            }
        } else {
            alert('Por favor, complete los campos requeridos.');
        }
      };

    

    return (
        <Layout>

            <View className="flex-1 items-center justify-center p-8">
                <View className="w-full p-8 max-w-sm">
                    
                    <Text className="text-lg font-extrabold text-gray-700 text-center mb-2">
                       Add new Part
                    </Text>
                   
                    <Select DefaultPlaceholder={'Select a Brand'} onValueChange={(text) => setNewPart({...newPart, brand:text})} selectedValue={newPart.brand}/>
                    
                    <Input placeholder="Type" value={newPart.type} onChangeText={(text) => setNewPart({...newPart, type:text})} />

                    <Input  placeholder="# Serial - Number"
                        value={newPart.serialNumber}
                        onChangeText={(text) => setNewPart({ ...newPart, serialNumber: text })}
                    />

                    <Input placeholder="Price"
                       value={newPart.price}
                       onChangeText={(text) => setNewPart({ ...newPart, price: text })}
                    />
                    <Input placeholder="Fecha de Cambio (dia/mes/año)"
                       value={newPart.date}
                       onChangeText={(text) => setNewPart({ ...newPart, date: text })}
                    />


                    <View className="block w-full mt-2">
                        <PrimaryButton message={'add part'} onPress={() => handleAddPart()}/>
                    </View>
                </View>
            </View>

        </Layout>
    )
}