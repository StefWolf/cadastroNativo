/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




function Page2({navigation}): JSX.Element {

  return (
        <View
          style={{
           flex:1,
           justifyContent: 'center',
           alignItems: 'center'
          }}>
             <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>voltar</Text>
            </TouchableOpacity>
            <Text style={{color:'black'}}>Page 2 - Olá Mundo</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Page3')}
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

export default Page2;