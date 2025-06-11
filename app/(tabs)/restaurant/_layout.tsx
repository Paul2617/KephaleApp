import { Stack, Tabs } from "expo-router";
import React from "react";
export default function Layout(){
    return (
    <Stack>
        <Tabs.Screen name="index" options={{
             headerShown: false,
        }} />
    </Stack>
);
}