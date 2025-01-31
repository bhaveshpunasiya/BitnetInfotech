import React, { useState } from 'react';
import { View, ImageBackground, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, ToastAndroid, ActivityIndicator } from 'react-native';
import CommanFlotingTextInput from '../Component/CommanFlotingTextInput';
import CommonButton from '../Component/CommonButton';
import CommonText from '../Component/CommanBoldTxt';
import CommonLinkText from '../Component/CommonLinkText';
import { CreateAccountStyle } from '../Style/CreateAccountStyle';
import { useNavigation } from '@react-navigation/native'
import Commantxtbtm from '../Component/Commantxtbtm';
import CircleImageButton from '../Component/ComponentBackImage';
 
import auth from '@react-native-firebase/auth';
import { EmailRegex } from '../utils/EmailRegex';
import { AUTHERRORCODES } from '../utils/FirebaseMessage';


interface CreateAccountProps {

}

const CreateAccount: React.FC<CreateAccountProps> = (props) => {
  const navigation = useNavigation<any>();
  const [isPress, setIsPress] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
     const EmaiIsValid = EmailRegex(email)
     if(!EmaiIsValid){
      return
     }
    setIsLoading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,password
      );

      const user = userCredential.user;

     await user.sendEmailVerification();

    } catch (error:any) {

      if (error.code == AUTHERRORCODES?.EMAIL_EXISTS ||error.code == AUTHERRORCODES?.INVALID_EMAIL  || error.code == AUTHERRORCODES?.UNVERIFIED_EMAIL) {
        ToastAndroid.show("something Wrong", 10)
      }
      ToastAndroid.show('Error creating account!', ToastAndroid.SHORT);
      console.error(error);
    } finally {
      setIsLoading(false);
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
                placeholder={"First Name"}
                value={firstName}
                onChangeText={setFirstName}
                containerStyle={CreateAccountStyle.inputContainer}
              />
              <CommanFlotingTextInput
                placeholder={" Last Name"}
                value={lastName}
                onChangeText={setLastName}
                containerStyle={CreateAccountStyle.inputContainer}
              />
              <CommanFlotingTextInput
                placeholder={"Email Address"}
                value={email}
                onChangeText={setEmail}
                keyboardType={"email-address"}
                containerStyle={CreateAccountStyle.inputContainer}
              />
              <CommanFlotingTextInput
                placeholder={"Password"}
                value={password}
                onChangeText={setPassword}
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

export default CreateAccount;
