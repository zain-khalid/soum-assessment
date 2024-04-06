import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const ContentArea = ({title, description}) => {
    return(
        <View>
            <Text style={styles.titleText}>{title}</Text>
            { !!description ? <Text style={styles.descriptionText}>{description}</Text> : null }
        </View>
    )
}

export default ContentArea;