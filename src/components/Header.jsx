import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"]
export default function Header({currentTime, setCurrentTime, setTime }){

    function handlePress(index) {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
        setCurrentTime(index)
        setTime(newTime * 60)
    }
    return(
        <View style={styles.container}>
            {options.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.itemStyle, currentTime !== index && { borderColor: "transparent"}]}
                    onPress={() => handlePress(index)}
                >
                    <Text style={{fontWeight: 'bold'}}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    itemStyle: {
        borderColor: '#fff',
        borderRadius: 10,
        borderWidth: 3,
        padding: 5,
        width: "33%",
        alignItems: "center",
        marginVertical: 20
    }
})