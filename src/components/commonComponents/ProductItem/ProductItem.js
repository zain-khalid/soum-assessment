import React from "react";
import { View } from "react-native";
import { CheckBox, ContentArea, Spacing } from "../";
import styles from "./styles";
import theme from "../../../theme";

const ProductItem = ({item, status, setStatus}) => {
    console.log(status())
    return(
        <View style={styles.container}>
            <CheckBox status={status} setStatus={setStatus} />
            <Spacing width={theme.spacing * 0.5} />
            <ContentArea title={item?.name} description={item?.description} />
        </View>
    )
}

export default ProductItem;