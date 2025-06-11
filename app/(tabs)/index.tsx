
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import NavBare from '../../components/navBare';
import ScrollViewVerticale from '../../components/ScrollViewVerticale';
import ScrollViewVerticaleMenu from '../../components/ScrollViewVerticaleMenu';

// 1. Crée un client React Query
const queryClient = new QueryClient();

// 2. Fonction de récupération des utilisateurs (via fetch)
const fetchUsers = async () => {
const response = await fetch('http://localhost:8888/api_/user.php');

  if (!response.ok) {
    throw new Error('Erreur lors du chargement des utilisateurs');
  }
  return response.json(); // Attend un tableau d'objets JSON
};

// 3. Composant pour afficher les utilisateurs
const UserList = () => {
// const [loading, setLoading] = useState(false);
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],    // Clé de cache
    queryFn: fetchUsers,    // Fonction de récupération
  });
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Erreur : {error.message}</Text>;
  }
//const UserLists = (data[0].name);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name} {item.prenom}</Text>
        </View>
      )}
    />
  );
};


 const accueil = () => {
  
return(
    <View style={styles.view}>
      <NavBare />
 <ScrollViewVerticaleMenu/>
 < ScrollView style={styles.container}>
      <ScrollViewVerticale />
       <QueryClientProvider client={queryClient}>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
          Liste des utilisateurs
        </Text>
        <UserList />
      </View>
    </QueryClientProvider>
      </ScrollView>
    </View>
  
);
};

const styles = StyleSheet.create ({
    view: {
    flex: 1,
    backgroundColor: '#fff'
  },
container: {
    flex: 1,
    backgroundColor: '#fff'
  },
    texte: {
    fontSize: 18,
    marginVertical: 20,
  },
  

});
export default accueil ;