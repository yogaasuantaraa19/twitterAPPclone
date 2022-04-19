import React from "react";
import { TouchableOpacity } from "react-native"; 
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const NewTweetButton = () => {

    const onPress =() => {
        console.warn('Open New Tweet');
    }
    return (
    <TouchableOpacity 
    activeOpacity={0.8}
    style={styles.button} 
    onPress={onPress}>
        <AntDesign name="pluscircleo" size={25} color="white" />
    </TouchableOpacity>
    )
}



export default NewTweetButton;