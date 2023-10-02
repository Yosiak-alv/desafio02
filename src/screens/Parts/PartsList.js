import { Text, View ,Pressable, FlatList, TouchableOpacity} from 'react-native';
import { Layout } from '../../layout/Layout';
import { useEffect, useState } from 'react';
import { FlashMessages } from '../../components/FlashMessage';
import {PrimaryButton} from '../../components/PrimaryButton';
import { Input } from '../../components/Input';
import { DangerButton } from '../../components/DangerButton';
import data from '../../../parts.json';
import { ModalComponent } from '../../components/Modal';

export const PartsList = ({navigation,route}) => {
    
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (part) => {
      setModalVisible(true);
      setPart(part)
    };
  
    const closeModal = () => {
      setModalVisible(false);
      setPart({});
    };
    const [parts,setParts] = useState([]); 
    
    const[part,setPart] = useState({})
    //const [filterParts,setFilterParts] = useState(parts);
    //const [search, setSearch] = useState('');

    useEffect(() => {
       onAdd();
    },[route.params?.level]);

    const onAdd = () => {
        if(route.params?.level != '' ){
            setParts([...parts, route.params?.part]);
           
        }
    }

    const renderItem = (({ item:part }) => {
        return (
            <View className="max-w-sm p-6 rounded-lg bg-gray-600 mt-4">
                <View className="flex flex-col space-y-2" >
                    <View className="grow">
                        <TouchableOpacity onPress={() => openModal(part)}>
                            <Text className="text-gray-200 text-md font-bold text-center ">{part?.type}</Text> 
                            <Text className="text-gray-200 text-md font-bold text-center ">{part?.date}</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="">
                        <DangerButton message={'delete'} onPress={() => handleDelete(part?.id)}/>
                    </View>
                </View>
            </View>
        );
    });

    /* const handleSearch = (text) => {
        setSearch(text.toLowerCase());
        const textSearch = text.toLowerCase();
        if(text.trim().length !== 0 ){
            let filteredData = parts.filter((part) => {
                const lowerType = part.type.toLowerCase();
                const lowerDate = part.date.toLowerCase();
                return (lowerDate.includes(textSearch.trim()) || lowerType.includes(textSearch.trim()));
            });
            setFilterParts(filteredData);
        }else{
            setFilterParts(parts);
        }
    } */

    const handleDelete = (id) => {
        if(confirm('You want to delete this Part ???')){
            const newList = parts.filter((item) => item.id !== id);
            setParts(newList);
        }   
    }
    

    return (
        <Layout level={route.params?.level} flashMessage={route.params?.flashMessage}>
            
            
            <ModalComponent
                visible={modalVisible}
                onClose={closeModal}
                part={part}
            />


            <View className="flex-1 items-center justify-center">
                <View className="w-full max-w-sm">
                    <View className="flex flex-row justify-between">
                        <View className="">
                            {/* <Input placeholder={'Search'} value={search} onChangeText={(text) => handleSearch(text)}/> */}
                        </View>
                        <View className="mt-1">
                            <PrimaryButton onPress={() => (navigation.navigate('CreateParts'))} message="add part"/>
                        </View>
                    </View>
                    
                </View>
                <View className="flex-1 w-full max-w-sm">
                    {
                        parts.length == 0  ?  (
                            <FlashMessages message={'No Part in our records ...'} level={'info'}/>
                        ): (
                            <FlatList 
                                data={parts.sort((a, b) => new Date(b.date) - new Date(a.date))}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                ItemSeparatorComponent={() => {return (<View className="ml-4"/>);}}
                            /> 
                        )
                    }
                </View>
            </View>
        </Layout>
    );

}