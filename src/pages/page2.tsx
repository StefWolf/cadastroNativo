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
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';



function Page2({navigation, route}): JSX.Element {

    const email = route.params.propKey;

    const [nome, setNome] = useState();

    const handleSubmit = () => {
        navigation.navigate('Page3', {propKey1: email, propKey2: nome})
     };

  return (
        <View
          style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                <Text>voltar</Text>
                </TouchableOpacity>
            <Title text={"Agora, digite seu Nome"} />
            <Input setData={setNome} data={nome} placeholder={"Digite seu nome"}/>
            <Button onPress={handleSubmit} text={"CONTINUAR"} />
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
});

export default Page2;