//import React from "react";
//import { Picker } from "@react-native-picker/picker";
import { Picker } from "react-native";
import brandsData from '../../brands.json';

export const Select = ({ data, DefaultPlaceholder,onValueChange, selectedValue }) => {
    //console.log(brandsData.brands);
    return (
        <Picker 
            className="w-full h-12 px-4 mb-4 bg-gray-500  border-gray-400 focus:border-gray-500 focus:ring-gray-500
            rounded-lg shadow-sm p-2.5 text-gray-200"
           onValueChange={onValueChange}
           selectedValue={selectedValue}
        >
            {DefaultPlaceholder && (
                <Picker.Item
                    label={DefaultPlaceholder}
                    value={null}
                />
            )}
            {
                brandsData.brands.map((brand, index) => {
                    return (
                        <Picker.Item
                            key={index}
                            label={brand}
                            value={brand}
                        />
                    )
                })
            }
            {/* <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" /> */}
        </Picker>

    )

}