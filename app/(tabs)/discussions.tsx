
import { ScrollView, StyleSheet, Text, View } from 'react-native';
 const Discussions = () => {
return(
       < ScrollView style={styles.container} >
      <View>
        <Text style={styles.texte}>Contenu qui défile sous le header</Text>
      </View>
    </ScrollView>
)
}

const styles = StyleSheet.create ({
container: {
    flex: 1,
    backgroundColor: '#fff'
  },
    texte: {
    fontSize: 18,
    marginVertical: 20,
  },
  
});
export default Discussions ;