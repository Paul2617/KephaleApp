
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View, } from 'react-native';

const queryClient = new QueryClient();

// 2. Fonction de récupération des utilisateurs (via fetch)
const fetchUsers = async () => {
const response = await fetch('http://localhost:8888/api/promoBoutique/');

  if (!response.ok) {
    throw new Error('Erreur lors du chargement des utilisateurs');
  }
  return response.json(); // Attend un tableau d'objets JSON

 
};
// 3. Composant pour afficher les utilisateurs
const ListeBoutiquePromo = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],    // Clé de cache
    queryFn: fetchUsers,    // Fonction de récupération
  });
     console.log(data);


  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    console.log(error);
    return <Text>Erreur : {error.message}</Text>;
  }

  return (
          <View style={{ flex: 1,}}>
    <FlatList
      data={data}
      
      horizontal={true} 
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false} // (optionnel) pour enlever la barre de scroll
      contentContainerStyle={{ paddingHorizontal: 10 }} // pour un peu d'espace au début/fin
      renderItem={({ item }) => (
        <View style={[styles.box]}>
            <Image source={{ uri:'https://kephale-api-rest-ml.rf.gd/uploads/img_boutique/?image=image.jpg'+item.image}} 
            style={[ styles.ImageAricl,]}
            resizeMode="cover" 
            />
             <Text 
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textBoutique}>{item.boutique}</Text>
             <Text style={styles.text}>-{item.poursantage}%</Text>
        </View>
      )}
    />
    </View>
  );
};

 const ScrollViewVerticale = () => {
return(

     <View style={{ flex: 1,}}>
         <QueryClientProvider  client={queryClient}>
        <ListeBoutiquePromo />
      </QueryClientProvider>
     </View>
  

)
}
const styles = StyleSheet.create ({
   containers: {
    flex: 1,
    paddingTop: 10,
    maxHeight: 220,
    backgroundColor: '#fdddff',
    paddingHorizontal: 10,
  },
  ImageAricl:{
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 12,
   position: 'absolute'
  },
  box: {
    width: 110,
    height: 180,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    position: 'relative'
    
  },
  textBoutique: {
    width: '100%',
    marginTop:135,
    marginLeft: 10,
    fontSize: 14,
    color: '#fff',
    fontWeight: 600
  },
  text: {
    marginLeft: 10,
    padding: 2,
    textAlign: 'center',
    marginTop:2,
    fontSize: 10,
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#49C102',
    borderRadius: 5,
  },
});
export default ScrollViewVerticale ;