import React from 'react';
import Route from './app/navigation';
import 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications'
import { SafeAreaView } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToastProvider>
        <Route />
      </ToastProvider>
    </SafeAreaView>
  )
};

export default App;
