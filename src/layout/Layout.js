import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import {FlashMessages} from '../components/FlashMessage';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';

export const Layout = (props) => {
    const navigation = useNavigation();
    //flash message 
    useEffect(() => {
        if (props.level) {
            const timer = setTimeout(() => {
                navigation.setParams({ level: '', flashMessage: '', part:{}});
            }, 3000);
    
          return () => clearTimeout(timer);
        }
    }, [props.level]);
    
    return (
        <View 
            className="flex-1 px-6 py-4 bg-gray-300 "
        >

            {
                props.level != '' && props.flashMessage != ''  && (
                    //centrarlo pero funciona xd
                    <View className="w-full max-w-sm mb-8">
                        <FlashMessages level={props.level} message={props.flashMessage} />
                    </View>

                )
            }

            {props.children}
        </View>

    );

}