import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from "expo-router";
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
const img = require('../assets/logo/image.jpg');
const logo = require('../assets/logo/logo.png');


const generateToken = () => {
  return Math.random().toString(36).substring(2, 16); // token aléatoire
};

export default function Page() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animateZoom = () => {
    const nextScale = Math.random() * 0.5 + 1; // zoom entre 1.0 et 1.5
    const duration = Math.random() * 3000 + 2000; // durée entre 2s et 5s

    Animated.timing(scaleAnim, {
      toValue: nextScale,
      duration: duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      animateZoom(); // relance l'animation à chaque fin
    });
  };
//const navigation = useNavigation();
  useEffect(() => {
    animateZoom();
  }, );

    useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('user_token');
      if (token) {
        // Redirige automatiquement
        //navigation.replace('/page/');
      } else {
        // Crée un token et sauvegarde
        const newToken = generateToken();
        await AsyncStorage.setItem('user_token', newToken);
      }
    };
    checkToken();
  }, []);


  return (
    <View  style={styles.container}>
      
        <View style={styles.container}>
      <Animated.Image source={img} 
      style={[
        styles.Image,
          {
            transform: [{ scale: scaleAnim }]
          }
      ]}
      resizeMode="cover" 
      />
      </View>
          <View style={styles.logo}>
      <Image source={logo} 
      style={styles.logo_img}
      resizeMode="cover" 
      />
           <Text style = {{color: '#fff', marginTop: -10}} >Kephalé</Text>
      </View>
         <View style={styles.texteBoton}>
           <Text style = {{color: '#fff', fontWeight: 200, width: 300, textAlign: 'center', marginBottom: 10 }} >Kephalé est une plateforme de vente et dachat en ligne.</Text>

      <Link href="/(tabs)" push asChild >
       <Text style={styles.TextbTn}>Bienvenue !</Text>
      </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1, // prend tout l'espace disponible
    position: 'absolute', // ignore le layout normal (ex: header/footer)
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  Image:{
    flex: 1,
    width: '100%',
    height: '100%',
     position: 'relative',
  },
  texteBoton:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom:50
  },
  TextbTn: {
     color: '#fff', 
     fontSize: 24, 
     backgroundColor: '#F39205',
     padding: 20,
     paddingLeft: 70,
     paddingRight: 70,
     borderRadius: 40
  },
  logo:{
     flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      paddingTop: 20
  },
  logo_img:{
     width: 100,
      height: 100,
  }
});