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
  View,
} from 'react-native';




function Page4({navigation, route}): JSX.Element {

    const email = route.params.propKey1;
    const nome = route.params.propKey2;
    const senha = route.params.propKey3;

  return (
        <View
          style={{
           flex:1,
           justifyContent: 'center',
           alignItems: 'center'
          }}>
            <Text style={{color:'black'}}>Page 4 - Olá Mundo</Text>
            <Text>
                {email}
            </Text>
            <Text>
                {nome}
            </Text>
            <Text>
                {senha}
            </Text>
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

export default Page4;