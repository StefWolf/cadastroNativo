/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';


import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';

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
                <Title text={"Crie sua própria conta"} />
                <View style={{width: '100%', gap:20, flexDirection:'column', alignItems:'center'}}>
                
                  <Input setData={setEmail} data={email} placeholder={"Digite seu e-mail"}/>
                  {
                    isValid ? false : (
                      <View style={{backgroundColor:'#bf3247', padding:5, borderRadius:20, width:'100%', alignItems:'center'}}>
                        <Text 
                          style={{color:'white'}}>
                            Por favor, digite um e-mail válido</Text>
                      </View>
                    )
                  }
                </View>
               
                  <Button onPress={handleSubmit} text={"CONTINUAR"}/>    
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
  }
});

export default Page1;
