import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert
  } from 'react-native';
  
function Button({onPress, text}) {
    return( 
        <TouchableOpacity style={styles.button} 
            onPress={onPress}
        >
            <Text style={{fontSize:20}}>{text}</Text>
        </TouchableOpacity>
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
});

export default Button;