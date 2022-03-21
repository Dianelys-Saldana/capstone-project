import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

const Menu = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => {navigation.navigate("Dashboard")}}>
            <Text>Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate("Profile")}}>
            <Text>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate("Calendar")}}>
            <Text>Calendar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate("Messages")}}>
            <Text>Messages</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#eee',
        padding: 16,
    }
})

export default Menu;
