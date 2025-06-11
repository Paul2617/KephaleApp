
import { ScrollView, StyleSheet, Text, View } from 'react-native';
 const ScrollViewVerticaleMenu = () => {
return(
   <ScrollView horizontal={true} style={styles.containers} showsHorizontalScrollIndicator={false}>
      <View style={[styles.box]} >
        <Text style={styles.text}>Tous</Text>
      </View>

        <View style={[styles.box]} >
        <Text style={styles.text}>Hommes</Text>
      </View>

        <View style={[styles.box]} >
        <Text style={styles.text}>Femmes</Text>
      </View>

        <View style={[styles.box]} >
        <Text style={styles.text}>Enfants</Text>
      </View>
    </ScrollView>
)
}
const styles = StyleSheet.create ({
   containers: {
    flex: 1,
    paddingTop: 5,
    maxHeight: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  box: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#EDEDED',
    marginRight: 10,
    
  },
  text: {
    width: 'auto',
    fontSize: 14,
    color: '#2D2D2D',
  },
});
export default ScrollViewVerticaleMenu ;