
import { ScrollView, StyleSheet, Text, View } from 'react-native';

 const Listemenu = () => {
return(
    <View  style={styles.ViewBody} >
   <ScrollView
    showsHorizontalScrollIndicator={false} 
    >
         <View style={styles.scrollView}>
        <Text>Liste Menu</Text>
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
}
})
export default Listemenu ;