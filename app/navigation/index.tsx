import React from 'react';
import 'react-native-gesture-handler';
import Loader from 'app/components/CommonScreen/Loader';
import useLoader from 'app/components/useLoader';
import { View } from 'react-native';
import Route from './route';

const Root = () => {
  const [loading] = useLoader();
  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      {loading && <Loader />}
      <Route />
    </View>
  );
};

export default Root;
