import { ToastAndroid } from "react-native";

export const EmailRegex = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkedEmail= emailRegex.test(email) 
    if( !checkedEmail){
        ToastAndroid.show("Please enter a valid email address.", ToastAndroid.SHORT);
    }
    return checkedEmail ; 
  };