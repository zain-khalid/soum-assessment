import React from "react";
import { Pressable, View } from "react-native";
import styles from "./styles";

const CheckBox = ({status, setStatus}) => {
    return (
        <Pressable style={styles.container} onPress={setStatus}>
            {status() ? <View style={{width: 10, height: 10, backgroundColor: "red"}} /> : null}
        </Pressable>
    )
}

export default CheckBox;