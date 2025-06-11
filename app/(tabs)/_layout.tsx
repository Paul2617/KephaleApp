import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "teal",
                    tabBarStyle: {
                        backgroundColor: '#f5f5f5',
                        height: 80,
                        paddingTop: 7,
                        elevation: 0, // Android
                        borderTopWidth: 0, // Supprimer la bordure sur iOS
                    },
                    tabBarLabelStyle: {
                        fontSize: 9,
                        fontWeight: '400',
                    },
                }}
            >

                <Tabs.Screen name="index" options=
                    {{
                        title: 'Accueil',
                        // href: null,
                        tabBarIcon: ({ color }) => (
                            <AntDesign
                                name="home"
                                size={30}
                                color={color}
                            />
                        )
                    }} />
                    
                <Tabs.Screen name="intro" options={{ href: null,}}/>
                  <Tabs.Screen name="discussions" options=
                    {{
                        title: 'Discussions',
                        tabBarBadge: 2,
                        // href: null,
                        tabBarIcon: ({ color }) => (
                            <AntDesign
                                name="message1"
                                size={30}
                                color={color}
                            />
                        )
                    }} />
                       <Tabs.Screen name="shopp" options=
                    {{
                        title: 'Achats',
                        // href: null,
                        tabBarIcon: ({ color }) => (
                            <AntDesign
                                name="shoppingcart"
                                size={30}
                                color={color}
                            />
                        )
                    }} />
                      <Tabs.Screen  name="restaurant" options=
                    {{
                        title: 'Restaurants',
                        headerShown: false,
                        // href: null,
                        tabBarIcon: ({ color }) => (
                            <AntDesign
                                name="bells"
                                size={30}
                                color={color}
                            />
                        )
                    }} />
                      <Tabs.Screen name="parametres" options=
                    {{
                        title: 'Paramètres',
                        headerShown: false,
                        // href: null,
                        tabBarIcon: ({ color }) => (
                            <AntDesign
                                name="setting"
                                size={30}
                                color={color}
                            />
                        )
                    }} />
                    

            </Tabs>


        </>
    );
}