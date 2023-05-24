/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {

  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';  




function Page2({navigation, route}): JSX.Element {

    const email = route.params.propKey;

    const [nome, setNome] = useState();

  return (
        <View
          style={{
           flex:1,
           alignItems: 'center'
          }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                <Text>voltar</Text>
                </TouchableOpacity>
            <Text style={styles.title}>Nome</Text>
            <TextInput
                    onChangeText={(value) => setNome(value)}
                    value={nome}
                    placeholder="Digite seu e-mail"
            />
            <TouchableOpacity style={styles.button}
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
    button: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
    },
    title: {
      fontSize: 40
    }
  });

export default Page2;