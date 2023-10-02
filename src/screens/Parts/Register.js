import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, TextInput, Picker } from 'react-native';
import brandsData from '../../../brands.json'

const Register = ({ navigation }) => {
  const [parts, setParts] = useState([]);
  const [newPart, setNewPart] = useState({
    type: '',
    brand: '',
    serialNumber: '',
    price: '',
    date: '',
  });

  const brands = brandsData.brands;

  const handleAddPart = () => {
    if (newPart.type && newPart.date) {
      setParts([...parts, newPart]);
      setNewPart({
        name: '',
        type: '',
        brand: '',
        serialNumber: '',
        price: '',
        date: '',
      });
    } else {
      alert('Por favor, complete los campos requeridos.');
    }
  };

  return (
    <View>
      <FlatList
        data={parts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text>{item.type}</Text>
            <Text>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
      <TextInput
        placeholder="Nombre de pieza"
        value={newPart.name}
        onChangeText={(text) => setNewPart({ ...newPart, name: text })}
      />
      <TextInput
        placeholder="Tipo de pieza"
        value={newPart.type}
        onChangeText={(text) => setNewPart({ ...newPart, type: text })}
      />
      <Picker
        selectedValue={newPart.brand}
        onValueChange={(itemValue, itemIndex) =>
          setNewPart({ ...newPart, brand: itemValue })
        }
      >
        {brands.map((brand, index) => (
          <Picker.Item key={index} label={brand} value={brand} />
        ))}
      </Picker>
      <TextInput
        placeholder="Numero de Serie de pieza"
        value={newPart.serialNumber}
        onChangeText={(text) => setNewPart({ ...newPart, serialNumber: text })}
      />
      <TextInput
        placeholder="Fecha de cambio"
        value={newPart.date}
        onChangeText={(text) => setNewPart({ ...newPart, date: text })}
      />
      <Button title="Agregar Pieza" onPress={handleAddPart} />
    </View>
  );
};

export default Register;