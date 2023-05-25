import {
    StyleSheet,
    Text,
  } from 'react-native';

function Title({text}) {
    return(
        <Text style={styles.title}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      color: 'white',
      fontFamily: 'Arial',
    },
   
  });

export default Title;