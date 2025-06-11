import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useState } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TextInput, View
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
 const Inscriqtions = () => {
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sexe, setSexe] = useState('Homme');
  const [imageBase64, setImageBase64] = useState(null);
  const [imageName, setImageName] = useState('');

  const handleImagePick = () => {
    launchImageLibrary(
      { mediaType: 'photo', includeBase64: true },
      (response) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          alert(response.errorMessage);
          return;
        }
        const asset = response.assets[0];
        setImageBase64(asset.base64);
        setImageName(asset.fileName || `profile_${Date.now()}.jpg`);
      }
    );
  };

  const handleRegister = async () => {

    if (!nom || !telephone || !password || !confirmPassword || !imageBase64) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    const data = {
      nom,
      telephone,
      password,
      sexe,
      image: imageBase64,
      image_name: imageName,
    };

    try {

      const response = await axios.post('http://localhost:8888/api/inscriqtions/', data);
     alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

return(
         <ScrollView contentContainerStyle={styles.container}>
           < View style={styles.imageView}>
                  {imageBase64 && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${imageBase64}` }}
          style={styles.image}
        />
      )}
      </View>
      <Text style={styles.label}>Nom</Text>
      <TextInput style={styles.input} onChangeText={setNom} value={nom} />

      <Text style={styles.label}>Téléphone</Text>
      <TextInput style={styles.input} onChangeText={setTelephone} value={telephone} keyboardType="phone-pad" />

      <Text style={styles.label}>Mot de passe</Text>
      <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry />

      <Text style={styles.label}>Confirmer mot de passe</Text>
      <TextInput style={styles.input} onChangeText={setConfirmPassword} value={confirmPassword} secureTextEntry />

      <Text style={styles.label}>Sexe</Text>

      <Picker selectedValue={sexe} onValueChange={(itemValue) => setSexe(itemValue)} style={styles.picker}>
        <Picker.Item label="Homme" value="Homme" />
        <Picker.Item label="Femme" value="Femme" />
      </Picker>
         <Text style={styles.Fillimage}  onPress={handleImagePick} >Choisir une image</Text>  

 <Text style={styles.btmimage}  onPress={handleRegister} >S'inscrire</Text> 
 
    </ScrollView>

)
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    },
  label: { fontWeight: 'bold', marginTop: 10, fontSize:12 },
  input: { borderWidth: 1, borderColor: '#8E8E8E', padding: 8, borderRadius: 13, height: 60 },
  picker: { 
    borderColor: '#8E8E8E', 
    height: 60, 
    justifyContent: 'center', 
    marginBottom: 10,
    borderRadius: 13,
     backgroundColor: '#E0E0E0', 
  },
  image: { width: 100, height: 100, marginTop: 10, borderRadius: 50, },
  imageView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Fillimage:{
    marginBottom: 10, 
    backgroundColor: '#E0E0E0', 
    height: 60, 
    textAlign: 'center',
    paddingTop: 20,
    borderRadius: 13,
    color: '#7F7F7F'
},
  btmimage:{
    marginBottom: 10, 
    backgroundColor: '#E0E0E0', 
    height: 60, 
    textAlign: 'center',
    paddingTop: 20,
    borderRadius: 13,
    color: '#7F7F7F'
},
});
export default Inscriqtions ;