/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '../components/Button';
import ShowData from '../components/ShowData';


function Page4({navigation, route}): JSX.Element {

    const email = route.params.propKey1;
    const nome = route.params.propKey2;
    const senha = route.params.propKey3.replace(/./g, '*');

    const handleSubmit = () => {
      navigation.navigate('Page1')
    }


  return (
        <View
          style={styles.container}>
            <View style={{width:'100%', flexDirection:'column', gap: 10}}>
              <Text style={styles.title}>Parabéns! Agora você faz parte da família!</Text>
              <Text style={{color:'#9aacfc', opacity:0.7, fontFamily:'Arial'}}>
                  Segue abaixo seus dados cadastrados
              </Text>
            </View>
            <View style={{width:'100%', padding:30, flexDirection:'column', gap:10, backgroundColor:'#edeef0', borderRadius:10, shadowColor: '#000',
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.25,
                          shadowRadius: 3,
                          elevation: 5,}}>
              <ShowData label={"E-mail"} data={email} />
              <ShowData label={"Nome"} data={nome} />
              <ShowData label={"Senha"} data={senha} />
            </View>
            <Button text={"Voltar para o Início"} onPress={handleSubmit} />
        </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontFamily:'Arial',
    fontSize:15
  }, 
  title: {
    fontSize: 30,
    color: '#05154f',
    fontFamily: 'Arial',
  },
});

export default Page4;