import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Productinfo = ({route}) => {

  const {productID} = route.params;

  return (
    <SafeAreaView>
      <Text>Productinfo{productID}</Text>
    </SafeAreaView>
  )
}

export default Productinfo