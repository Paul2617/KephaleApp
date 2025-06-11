
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { Stack } from "expo-router";


import { StyleSheet, TextInput, View } from 'react-native';
const img = require('../assets/logo/logo.png');

 const NavBare = () => {
return(
 <View>
       <Stack.Screen options={{ headerShown: false }}/>
       <View style={styles.navBare} >
        <View style={styles.block}>
        <Image source={img} style= {{ 
            width: 40, 
            height: 40, 
            objectFit: 'cover', 
            padding: 30,
            marginRight:10
        }}  />
        <View style={styles.view_recherche} >
                     <TextInput
          placeholder="Rechercher..."
          style={styles.input}
          placeholderTextColor="#888"
        />
        <AntDesign name="search1" size={24} color="black" />
        </View>

        </View>
       </View>
    </View>
)
}
const styles = StyleSheet.create ({
view_recherche:{
     flexDirection: 'row',
       alignItems: 'center',
},
input:{
    backgroundColor: '#EDEDED',
    width: '78%',
    height: 50,
    marginRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    textShadowColor: '#fff'
},
navBare:{
    flexDirection: 'row',
    height: 100,
    alignItems: 'flex-end',
    padding: 2,
},

block:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
},
textKephale: {
    fontWeight: 600
}
});
export default NavBare ;