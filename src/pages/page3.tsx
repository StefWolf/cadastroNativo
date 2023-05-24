/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';




function Page3(): JSX.Element {

    const [senha, setSenha] = useState();

    const handleSubmit = () => {

    }

  return (
    <View
    style={{
    flex:1,
    alignItems: 'center',
    backgroundColor: 'white'
}}>
    <Text style={styles.title}>Senha</Text>
    <TextInput 
        onChangeText={(value) => setSenha(value)}
        value={senha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
    />
    <TouchableOpacity style={styles.button}
        onPress={handleSubmit}
    >
        <Text style={{fontSize:20}}>Cadastrar</Text>
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

export default Page3;