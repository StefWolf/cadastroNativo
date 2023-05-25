
  import {
    Text,
    View,
  } from 'react-native';
function ShowData({label, data}) {
    return( 
        <View style={{width:'100%', flexDirection:'row', gap:5}}>
            <Text style={{fontSize:18}}>
                {label}:
            </Text>
            <Text style={{fontSize:18}}>
                {data}
            </Text>
      </View>
    );
}

export default ShowData;