import React from 'react';
import Toast from 'react-native-simple-toast';

interface ToastProps {
  message: string;
  duration?: 'short' | 'long'; 
}

const CommanToast: React.FC<ToastProps> = ({ message, duration = 'short' }) => {
  if (message) {
    Toast.show(message, duration === 'short' ? Toast.SHORT : Toast.LONG);
  }
  return null; 
};

export default CommanToast;
