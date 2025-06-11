import { Link } from "expo-router";
import { Button, Text, View } from 'react-native';
 const Parametres = () => {
return(
    <View >
        <Text>Parametres</Text>
          <View >
           <Link href="/parametres/inscriqtions"  push asChild><Button title="Inscriqtions" /></Link>
                 <Link href="/parametres/inscriqtions"  push asChild><Button title="Inscriqtions" /></Link>
                 </View>
    </View>
)
}
export default Parametres ;