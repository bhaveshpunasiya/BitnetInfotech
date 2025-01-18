import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform,
  ToastAndroid,
  Alert,
  Image,
} from 'react-native';
import CommanFlotingTextInput from '../Component/CommanFlotingTextInput';
import CommonButton from '../Component/CommonButton';
import CommonText from '../Component/CommanBoldTxt';
import CircleImageButton from '../Component/ComponentBackImage';
import { ForgotPasswordStyle } from '../Style/ForgotPasswordStyle';
import { useNavigation, CommonActions } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { images } from '../utils/Images';
import { AUTHERRORCODES } from '../utils/FirebaseMessage';
import CommanToast from '../utils/CommanToast';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [isPress, setIsPress] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(()=>{
    // console.log("toast work")
  CommanToast("test");
})

  const handleSendResetEmail = async () => {
    if (!email) {
      ToastAndroid.show('Please enter your email address.', ToastAndroid.SHORT);
      return;
    }

    try {
      const sentReset = await auth().sendPasswordResetEmail(email);
      setIsPress(true);
      ToastAndroid.show(
        'Password reset email sent! Check your inbox.',
        ToastAndroid.SHORT
      );
    } catch (error) {
      if (error.code === AUTHERRORCODES?.USER_DELETED) {
        ToastAndroid.show("User Not Found",10)
      } else if (error.code === AUTHERRORCODES?.INVALID_EMAIL) {
        Alert.alert('Error', 'Invalid email address.');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again later.');
      }
      console.error(error);
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
          <Image source={images.SentMail} style={ForgotPasswordStyle.image} />
          <CommonText
            textStyle={ForgotPasswordStyle.commanTxt}
            text={'We sent you an email to reset your password.'}
          />
          <CommonButton
            buttonStyle={ForgotPasswordStyle.btn}
            loading={false}
            title={'Return to Login'}
            onPress={handleReturnLogin}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={ForgotPasswordStyle.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={ForgotPasswordStyle.inputContainers}>
            <CircleImageButton
              containerStyle={ForgotPasswordStyle.containerStyle}
              onPress={() => navigation.goBack()}
            />
            <CommonText text={'Forgot Password'} />
            <CommanFlotingTextInput
              placeholder={'Email Address'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              containerStyle={ForgotPasswordStyle.inputContainer}
            />
            <CommonButton
              loading={false}
              title={'Continue'}
              onPress={handleSendResetEmail}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
