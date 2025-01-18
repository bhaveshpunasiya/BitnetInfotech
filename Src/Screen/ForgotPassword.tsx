import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ImageBackground, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, ToastAndroid } from 'react-native';
import CommanFlotingTextInput from '../Component/CommanFlotingTextInput';
import CommonButton from '../Component/CommonButton';
import colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scaling';
import { fontStyles } from '../utils/Fonts';
import CommonText from '../Component/CommanBoldTxt';
import CommonLinkText from '../Component/CommonLinkText';
import { ForgotPasswordStyle } from '../Style/ForgotPasswordStyle';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { images } from '../utils/Images';
import Commantxtbtm from '../Component/Commantxtbtm';
import CircleImageButton from '../Component/ComponentBackImage';

interface LoginProps {

}

const ForgotPassword: React.FC<LoginProps> = (props) => {
  const navigation = useNavigation();
  const [isPress, setIsPress] = useState(true)
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
  
  const handleReturnLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }], 
      })
    );
  };


  if (isPress) {
    return (
      <SafeAreaView style={ForgotPasswordStyle.container}>
          <View style={ForgotPasswordStyle.sentMailcontainer}>
            <Image source={images.SentMail} style={ForgotPasswordStyle.image}></Image>
            <CommonText textStyle={ForgotPasswordStyle.commanTxt} text={'We Sent you an Email to reset your password.'} />
            
            <CommonButton buttonStyle={ForgotPasswordStyle.btn} loading={false} title={'Return to Login'} onPress={handleReturnLogin} />
          </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={ForgotPasswordStyle.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={ForgotPasswordStyle.inputContainers}>
            <CircleImageButton containerStyle={ForgotPasswordStyle.containerStyle} onPress={() => navigation.goBack()} />
            <CommonText text={'Forgot Password'} />
            <CommanFlotingTextInput
              placeholder={"Email Address"}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              containerStyle={ForgotPasswordStyle.inputContainer}
            />
            <CommonButton loading={false} title={'Continue'} onPress={handleEmailBtn} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

