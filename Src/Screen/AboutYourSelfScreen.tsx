

import React, { useState } from 'react';
import {  View, SafeAreaView, ScrollView, Platform, ToastAndroid } from 'react-native';
import CommonButton from '../Component/CommonButton';
import CommonText from '../Component/CommanBoldTxt';
import { AboutYourSelfStyle } from '../Style/AboutYourSelfStyle';
import { CommonActions, useNavigation } from '@react-navigation/native'
import Commantxtbtm from '../Component/Commantxtbtm';
import CommonDropdown from '../Component/CommonDropdown';
import { verticalScale } from '../utils/scaling';

interface LoginProps {

}

const AboutYourSelfScreen: React.FC<LoginProps> = (props) => {
    const navigation = useNavigation();
    const [isPress, setIsPress] = useState(false)
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Male')


    const handleFinishBtn = () => {
        navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }], 
              })
            );
        if (!email) {
            ToastAndroid.show("Please enter both email and password.", 10)
            return;
        }
        else {
            setIsPress(true)
        }
    };

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (item: { label: string; value: string }) => {
        setSelectedValue(item.value);
    };

    const data = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
        { label: 'Other', value: 'Other' },
    ];

    return (
        <SafeAreaView style={AboutYourSelfStyle.container}>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={AboutYourSelfStyle.loginContainer}>
                    <CommonText textStyle={AboutYourSelfStyle.headeTxt} text={'Tell us About yourself'} />
                    <Commantxtbtm primaryTextStyle={AboutYourSelfStyle.primaryTextStyle} containerStyle={AboutYourSelfStyle.containerTxt} primaryText={'Who do you shop for ?'} /> :

                    <View style={AboutYourSelfStyle.genderContainer}>

                        <CommonButton textStyle={gender == "Male" ? AboutYourSelfStyle.textStyleTwo : AboutYourSelfStyle.textStyle} buttonStyle={gender == "Male" ? AboutYourSelfStyle.buttonStyleOne : AboutYourSelfStyle.buttonStyleTwo} title={'Male'} onPress={() => setGender("Male")} />
                        <CommonButton textStyle={gender == "Female" ? AboutYourSelfStyle.textStyleTwo : AboutYourSelfStyle.textStyle} buttonStyle={gender == "Female" ? AboutYourSelfStyle.buttonStyleOne : AboutYourSelfStyle.buttonStyleTwo} title={'Female'} onPress={() => setGender("Female")} />
                    </View>
                    <Commantxtbtm primaryTextStyle={AboutYourSelfStyle.primaryTextStyle} containerStyle={AboutYourSelfStyle.containerTxt} primaryText={'How Old are you ?'} /> :
                    <CommonDropdown
                        data={data}
                        value={selectedValue}
                        onChange={handleChange}
                        placeholder="Select Gender"
                        containerStyle={{marginTop:verticalScale(13)}}
                    />

                </View>
            </ScrollView>
            <CommonButton buttonStyle={AboutYourSelfStyle.finsihBtn} loading={false} title={'Continue'} onPress={handleFinishBtn} />

        </SafeAreaView>
    );
};

export default AboutYourSelfScreen;
