/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';




function Page1({ navigation }) {

  return (
        <View
          style={{
           flex:1,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: 'green'
          }}>
            <Text >Page 1 - Olá Mundo</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Page2')}
            >
                <Text>continuar</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Page1;
