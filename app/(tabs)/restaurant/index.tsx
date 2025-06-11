
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from "expo-router";
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
const img = require('../../../assets/logo/image.jpg');

 const Restaurant = () => {
return(
    <View  style={styles.ViewBody} >
   <ScrollView
    showsHorizontalScrollIndicator={false} 
    >
        <Image source={img} style= {styles.ImageResto}  />
         <View style={styles.scrollView}>
        <Text>Restaurant</Text>
<View style={styles.ScrollViewResto}>
           <View style={styles.ViewResto}>
            <Image source={img} style= {styles.ImageRestos}  />
              <AntDesign name="link"
                                size={30}
                            />
           <Link href="/restaurant/listemenu?id_article=2"  push asChild><Button title="Liste Menu" /></Link>
           </View>

            <View style={styles.ViewResto}>
            <Image source={img} style= {styles.ImageRestos}  />
              <AntDesign name="link"
                                size={30}
                            />
           <Link href="/restaurant/listemenu?id_article=2"  push asChild><Button title="Liste Menu" /></Link>
           </View>


            <View style={styles.ViewResto}>
            <Image source={img} style= {styles.ImageRestos}  />
              <AntDesign name="link"
                                size={30}
                            />
           <Link href="/restaurant/listemenu?id_article=2"  push asChild><Button title="Liste Menu" /></Link>
           </View>
</View>
         </View>
    </ScrollView>
    </View>
)
}

const styles = StyleSheet.create ( {
    ViewBody: {
    flex: 1, 
    bottom: 0,
    left: 0,
    right: 0,
    },
    ImageResto:{
        width: '100%',
        height: 200
    },
scrollView : {
    marginLeft: 20,
    marginRight: 20,
},
ScrollViewResto:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'

},
ViewResto:{
width: 150,
height: 'auto',
backgroundColor: '#EDEDED',
margin: 10,
borderRadius: 13,
},
ImageRestos:{
width: 150,
height: 200,
borderRadius: 13,

},
})
export default Restaurant ;