import { Text, View } from 'react-native';
import { Layout } from '../../layout/Layout';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

import { PrimaryButton } from '../../components/PrimaryButton';

import uuid from 'react-native-uuid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FlashMessages } from '../../components/FlashMessage';

export const CreateParts = ({navigation}) => {

    const formik = useFormik({
        initialValues:{
            id: uuid.v1(),
            type: '',
            brand: '',
            serialNumber: '',
            price: '',
            date: '',
        },
        validationSchema: Yup.object({
            type: Yup.string().required(),
            brand:Yup.string().required(),
            serialNumber: Yup.string().required(),
            price: Yup.number().required(),
            date: Yup.string().required().matches(/^\d{4}-\d{2}-\d{2}$/),
        }),
        onSubmit: () => handleAddPart()
    })

    const handleAddPart = () => {
        navigation.navigate('PartsList',{ level:'success', flashMessage:'Part Added Successfuly! .', part: formik.values});
    };

    return (
        <Layout>

            <View className="flex-1 items-center justify-center p-8">
                <View className="w-full p-8 max-w-sm">
                    
                    <Text className="text-lg font-extrabold text-gray-700 text-center mb-2">
                       Add new Part
                    </Text>
                   
                    <Select DefaultPlaceholder={'Select a Brand'} onValueChange={formik.handleChange('brand')} selectedValue={formik.values.brand}/>

                    <Input placeholder="Type" value={formik.values.type} onChangeText={formik.handleChange('type')} />
                    
                    <Input  placeholder="# Serial - Number"
                        value={formik.values.serialNumber}
                        onChangeText={formik.handleChange('serialNumber')}
                    />

                    <Input placeholder="Price"
                       value={formik.values.price}
                       onChangeText={formik.handleChange('price')}
                    />

                    <Input placeholder="Fecha de Cambio (YYYY-MM-DD)"
                       value={formik.values.date}
                       onChangeText={formik.handleChange('date')}
                    />
                    
                    <View className="block w-full mt-2">
                        <PrimaryButton message={'add part'} onPress={formik.handleSubmit}/>
                    </View>
                    {
                        formik.errors ? (
                            <>  
                                {(formik.errors?.brand && formik.touched?.brand == true )&& (<FlashMessages level={'error'} message={formik.errors.brand}/>)}
                                {(formik.errors?.type && formik.touched?.type == true) && (<FlashMessages level={'error'} message={formik.errors.type}/>)}
                                {(formik.errors?.serialNumber && formik.touched?.serialNumber == true) && (<FlashMessages level={'error'} message={formik.errors.serialNumber}/>)}
                                {(formik.errors?.price && formik.touched?.price == true) && (<FlashMessages level={'error'} message={formik.errors.price}/>)}
                                {(formik.errors?.date && formik.touched?.date == true) && (<FlashMessages level={'error'} message={formik.errors.date}/>)}
                            </>
                        ):null
                    }
                </View>
            </View>

        </Layout>
    )
}