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




function Page3({navigation, route}): JSX.Element {

    const email = route.params.propKey1;
    const nome = route.params.propKey2;
    
    const [senha, setSenha] = useState();

    const handleSubmit = () => {
        navigation.navigate('Page4', {propKey1: email, propKey2: nome, propKey3: senha})
    }

  return (
    <View
    style={{
    flex:1,
    alignItems: 'center',
    backgroundColor: 'white'
}}>
    <TouchableOpacity
        onPress={() => navigation.goBack()}
    >
        <Text>voltar</Text>
    </TouchableOpacity>
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