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

import Title from '../components/Title';


function Page4({navigation, route}): JSX.Element {

    const email = route.params.propKey1;
    const nome = route.params.propKey2;
    const senha = route.params.propKey3;

  return (
        <View
          style={styles.container}>
            <Title text={"Dados do usuário"} />
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
  container : {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#05154f',
    padding: 20,
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontFamily:'Arial',
    fontSize:15
  }
});

export default Page4;