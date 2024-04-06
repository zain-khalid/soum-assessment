import React from "react";
import { FlatList, View } from "react-native";
import { ProductItem } from "../../commonComponents";
import styles from "./styles";
import theme from "../../../theme";

const Variant = ({item, isSelected, handleSelect, category, brand, model}) => {

    const setStatus = () => {
        handleSelect(category, brand, model, item.name, item);
    }

    const handleIsSelected = () => isSelected(category, brand, model, item.name);

    return(
        <View style={styles.container}>
            <View style={{marginLeft: theme.spacing * 2}}>
                <ProductItem item={item} status={handleIsSelected} setStatus={setStatus} />
            </View>
        </View>
    )
}

export default Variant;