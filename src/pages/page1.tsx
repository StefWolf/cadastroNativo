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
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

function Page1({ navigation }) {

    const [email, setEmail] = useState('');

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        Alert.alert('Texto digitado:', email);
        if (validateEmail()) {
            navigation.navigate('Page2', { propKey: email })
        } else {
            Alert.alert('E-mail inválido');
        }
     };

    return (
            <View
                style={{
                flex:1,
                alignItems: 'center',
                backgroundColor: 'white'
            }}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput 
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                    placeholder="Digite seu e-mail"
                />
                <TouchableOpacity style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={{fontSize:20}}>continuar</Text>
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

export default Page1;
