import React, {  useState } from 'react';
import {  View, ImageBackground, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, ToastAndroid } from 'react-native';
import CommanFlotingTextInput from '../Component/CommanFlotingTextInput';
import CommonButton from '../Component/CommonButton';
import CommonText from '../Component/CommanBoldTxt';
import CommonLinkText from '../Component/CommonLinkText';
import { CreateAccountStyle } from '../Style/CreateAccountStyle';
import { useNavigation } from '@react-navigation/native'
import Commantxtbtm from '../Component/Commantxtbtm';
import CircleImageButton from '../Component/ComponentBackImage';

interface LoginProps {

}

const LoginScreen: React.FC<LoginProps> = (props) => {
  const navigation = useNavigation<any>();
  const [isPress, setIsPress] = useState(false)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleContinue = () => {
    navigation.navigate("AboutYourSelfScreen")
    if (!email && !lastName && !lastName && !password) {
      ToastAndroid.show("Please Enter All Field.", 10)
      return;
    }
    else {
      setIsPress(true)
    }
  };

  return (
    <SafeAreaView style={CreateAccountStyle.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={CreateAccountStyle.loginContainer}>
            
          <CircleImageButton containerStyle={CreateAccountStyle.containerStyle} onPress={() => navigation.goBack()} />
            <CommonText text={'Create Account'} />
            <View style={CreateAccountStyle.inputContainerMain}>

            <CommanFlotingTextInput
              placeholder={ "Email Address"}
              value={ firstName }
              onChangeText={ setFirstName }
              containerStyle={CreateAccountStyle.inputContainer}
            />
            <CommanFlotingTextInput
              placeholder={ "Email Address"}
              value={ lastName }
              onChangeText={ setLastName }
              containerStyle={CreateAccountStyle.inputContainer}
            />
            <CommanFlotingTextInput
              placeholder={ "Email Address"}
              value={ email }
              onChangeText={ setEmail }
              keyboardType={"email-address"}
              containerStyle={CreateAccountStyle.inputContainer}
            />
            <CommanFlotingTextInput
              placeholder={ "Password"}
              value={ password }
              onChangeText={ setPassword }
              containerStyle={CreateAccountStyle.inputContainer}
            />
            </View>
            <CommonButton loading={false} title={'Continue'} onPress={handleContinue} />
            
                <Commantxtbtm containerStyle={CreateAccountStyle.containerTxt} primaryText={'Forgot Password ? '} onPress={() => navigation.navigate("ForgotPassword")} secondaryText={'Reset'} />
            

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
