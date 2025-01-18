import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ImageBackground, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, ToastAndroid } from 'react-native';
import CommanFlotingTextInput from '../Component/CommanFlotingTextInput';
import CommonButton from '../Component/CommonButton';
import colors from '../utils/Colors';
import { moderateScale, verticalScale } from '../utils/scaling';
import { fontStyles } from '../utils/Fonts';
import CommonText from '../Component/CommanBoldTxt';
import CommonLinkText from '../Component/CommonLinkText';
import { LoginScreenStyle } from '../Style/LoginScreenStyle';
import { useNavigation } from '@react-navigation/native'
import { images } from '../utils/Images';
import Commantxtbtm from '../Component/Commantxtbtm';

interface LoginProps {

}

const LoginScreen: React.FC<LoginProps> = (props) => {
  const navigation = useNavigation();
  const [isPress, setIsPress] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailBtn = () => {
    if (!email) {
      ToastAndroid.show("Please enter both email and password.", 10)
      return;
    }
    else {
      setIsPress(true)
    }
  };

  return (
    <SafeAreaView style={LoginScreenStyle.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={LoginScreenStyle.loginContainer}>
            <CommonText text={'Sign in'} />
            <CommanFlotingTextInput
              placeholder={!isPress ? "Email Address" : "Password"}
              value={!isPress ? email : password}
              onChangeText={!isPress ? setEmail : setPassword}
              keyboardType={!isPress ?"email-address":"default"}
              containerStyle={LoginScreenStyle.inputContainer}
            />
            <CommonButton loading={false} title={'Continue'} onPress={handleEmailBtn} />
            {
              !isPress ?
                <Commantxtbtm containerStyle={LoginScreenStyle.containerTxt} primaryText={'Dont have an Account ?'} onPress={() => navigation.navigate("CreateAccount")} secondaryText={'Create One'} /> :
                <Commantxtbtm containerStyle={LoginScreenStyle.containerTxt} primaryText={'Forgot Password ? '} onPress={() => navigation.navigate("ForgotPassword")} secondaryText={'Reset'} />
            }
            {
              !isPress ?
                <View style={LoginScreenStyle.btnContainer} >
                  <CommonButton textStyle={LoginScreenStyle.btntxt} buttonStyle={LoginScreenStyle.btn} imageSource={images.iosImage} loading={false} title={'Continue With Apple'} onPress={() => { }} />
                  <CommonButton textStyle={LoginScreenStyle.btntxt} buttonStyle={LoginScreenStyle.btn} imageSource={images.Google} loading={false} title={'Continue With Google'} onPress={() => { }} />
                  <CommonButton textStyle={LoginScreenStyle.btntxt} buttonStyle={LoginScreenStyle.btn} imageSource={images.Facebook} loading={false} title={'Continue With Facebook'} onPress={() => { }} />
                </View>
                : null
            }

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
