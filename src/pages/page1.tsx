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
import Button from '../components/Button';

function Page1({ navigation }) {

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        if (validateEmail()) {
            navigation.navigate('Page2', { propKey: email })
        } else {
            setIsValid(false)
        }
     };

    return (
            <View
                style={styles.container}>
                <Text style={styles.title}>Crie sua própria conta</Text>
                <TextInput 
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#7c8bbf"
                />
               
                  <Button onPress={handleSubmit} />
                  {
                    isValid ? false : (
                      <View>
                        <Text>Por favor, digite um e-mail válido</Text>
                      </View>
                    )
                  }
               
            </View>
    );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
     borderRadius: 50,
     backgroundColor: '#f09c35',
     width: '100%',
     fontFamily: 'Arial',
  },
  container : {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#05154f',
    padding: 20,
    justifyContent: 'space-between',
  },
   title: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Arial',
  },
  input: {
    borderWidth: 1,
    borderColor: '#7c8bbf',
    padding: 6,
    borderRadius: 30,
     width: '100%',
  }
});

export default Page1;
