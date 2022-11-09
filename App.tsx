import React from 'react';
import Route from './app/navigation';
import 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications'


const App = () => {
  return (
    <ToastProvider>
      <Route />
    </ToastProvider>
  )
};

export default App;
