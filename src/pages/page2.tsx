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
  TouchableOpacity,
  View,
} from 'react-native';  




function Page2({navigation, route}): JSX.Element {

    const email = route.params.propKey;

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
            <Text style={{color:'black'}}>Page 2 - Olá Mundo {email}</Text>
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