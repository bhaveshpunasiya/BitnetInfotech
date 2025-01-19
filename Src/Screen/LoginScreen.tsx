import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, ToastAndroid, BackHandler } from 'react-native';
import CommanFlotingTextInput from '../Component/CommanFlotingTextInput';
import CommonButton from '../Component/CommonButton';
import CommonText from '../Component/CommanBoldTxt';
import { LoginScreenStyle } from '../Style/LoginScreenStyle';
import { useNavigation } from '@react-navigation/native'
import { images } from '../utils/Images';
import Commantxtbtm from '../Component/Commantxtbtm';
import auth from '@react-native-firebase/auth';
import { EmailRegex } from '../utils/EmailRegex';
import { AUTHERRORCODES } from '../utils/FirebaseMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginReq } from '../Store/Slices/authSlice';
import { GoogleSignin,User } from '@react-native-google-signin/google-signin';

interface LoginProps {}

const LoginScreen: React.FC<LoginProps> = (props) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch()
  const [isPress, setIsPress] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState<any>()


  useEffect(() => {
    if (isPress && data?.user?.emailVerified && showPassword) {
      IsUser()
    }
    else if (true && data?.user?.emailVerified == false) {
      ToastAndroid.show("Please Verify Email", 10)
    }
  }, [data?.user])

  useEffect(() => {
    const handleBackPress = () => {
      if (showPassword) {
        setShowPassword(false);
        return true; 
      }
      return false; 
    };

    if (showPassword) {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    }

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [showPassword]);

  const IsUser = async () =>{
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "BottomNavigation"
        }
      ]
    });
    await AsyncStorage.setItem('isLogin', "true");
    dispatch(loginReq())
  }
  const handleEmailBtn = () => {
    const EmaiIsValid = EmailRegex(email)
    if (EmaiIsValid) {
      setShowPassword(true)
    }
  };
  const handleSignInBtn = () => {
    setIsPress(true)
    auth().signInWithEmailAndPassword(email,password)
      .then((res) => {
        setData(res)
        console.log(res?.user, ' signed in!');
      })
      .catch(error => {
        if (error.code == AUTHERRORCODES?.INVALID_EMAIL|| error.code == AUTHERRORCODES?.INVALID_IDP_RESPONSE || error.code == AUTHERRORCODES?.INVALID_PASSWORD) {
          ToastAndroid.show("invalid Credetial", 10)
        }
      });
  }

  const handleSignUpWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        offlineAccess: false,
        webClientId: "357639530175-lgb1hi8uu86a1ngbh8jsm51p5mntb1ff.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
  
      await GoogleSignin.hasPlayServices();
  
      const user: User = await GoogleSignin.signIn();
  
      const { idToken } = user;
      if (!idToken) {
        throw new Error('idToken is missing from Google Sign-In response');
      }
  
      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredentials);
  
      // console.log("User signed in successfully");
      IsUser();
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
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
              placeholder={!showPassword ? "Email Address" : "Password"}
              value={!showPassword ? email : password}
              onChangeText={!showPassword ? setEmail : setPassword}
              keyboardType={!showPassword ? "email-address" : "default"}
              containerStyle={LoginScreenStyle.inputContainer}
            />
            <CommonButton loading={false} title={'Continue'} onPress={ !showPassword ? handleEmailBtn : handleSignInBtn} />
            {
              !showPassword ?
                <Commantxtbtm containerStyle={LoginScreenStyle.containerTxt} primaryText={'Dont have an Account ?'} onPress={() => navigation.navigate("CreateAccount")} secondaryText={'Create One'} /> :
                <Commantxtbtm containerStyle={LoginScreenStyle.containerTxt} primaryText={'Forgot Password ? '} onPress={() => navigation.navigate("ForgotPassword")} secondaryText={'Reset'} />
            }
            {
              !showPassword ?
                <View style={LoginScreenStyle.btnContainer} >
                  <CommonButton textStyle={LoginScreenStyle.btntxt} buttonStyle={LoginScreenStyle.btn} imageSource={images.iosImage} loading={false} title={'Continue With Apple'} onPress={() => { }} />
                  <CommonButton textStyle={LoginScreenStyle.btntxt} buttonStyle={LoginScreenStyle.btn} imageSource={images.Google} loading={false} title={'Continue With Google'} onPress={handleSignUpWithGoogle} />
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

