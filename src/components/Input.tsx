import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert
  } from 'react-native';
  
function Input({setEmail, email}) {
    return( 
        <TextInput 
            onChangeText={(value) => setEmail(value)}
            value={email}
            style={styles.input}
            placeholder="Digite seu e-mail"
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