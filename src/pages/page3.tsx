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
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import Button from '../components/Button';
import Title from '../components/Title';


function Page3({navigation, route}): JSX.Element {

    const email = route.params.propKey1;
    const nome = route.params.propKey2;
    
    const [senha, setSenha] = useState('');

    const handleSubmit = () => {
      if(senha.length > 8) {
        navigation.navigate('Page4', {propKey1: email, propKey2: nome, propKey3: senha})
      } else {
        Alert.alert("Por favor, digite uma senha acima de 8 caracteres")
      }
    }

  return (
    <View
    style={styles.container}>
    <TouchableOpacity
        onPress={() => navigation.goBack()}
    >
        <Text style={{fontSize:20, color:'white', fontFamily:'Arial'}}>voltar</Text>
    </TouchableOpacity>

    <Title text={"Agora para finalizar..."} />
    <TextInput 
            onChangeText={(value) => setSenha(value)}
            value={senha}
            style={styles.input}
            placeholder= {"Digite sua senha"}
            placeholderTextColor="#7c8bbf"
            secureTextEntry={true}
        />
      <Button onPress={handleSubmit} text={"CADASTRAR"} />
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
  input: {
    borderWidth: 1,
    borderColor: '#7c8bbf',
    padding: 6,
    borderRadius: 30,
    width: '100%',
    color: 'white',
  }
});

export default Page3;