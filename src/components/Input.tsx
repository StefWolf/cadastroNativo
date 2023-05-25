import {
    StyleSheet,
    TextInput,
  } from 'react-native';
  
function Input({setData, data, placeholder}) {
    return( 
        <TextInput 
            onChangeText={(value) => setData(value)}
            value={data}
            style={styles.input}
            placeholder= {placeholder}
            placeholderTextColor="#7c8bbf"
        />
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
    input: {
        borderWidth: 1,
        borderColor: '#7c8bbf',
        padding: 6,
        borderRadius: 30,
        width: '100%',
        color: 'white',
      }
});

export default Input;