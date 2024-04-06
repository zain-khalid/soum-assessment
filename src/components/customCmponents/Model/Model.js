import React from "react";
import styles from "./styles";
import theme from "../../../theme";
import Variant from "../Variant/Variant";
import { FlatList, View } from "react-native";
import { ProductItem } from "../../commonComponents";

const Model = ({item, isSelected, handleSelect, category, brand}) => {
    const { variant = [], name } = item

    const setStatus = () => {
        handleSelect(category, brand, name, null, item)
    }

    const handleIsSelected = () => isSelected(category, brand, name, null)

    return(
        <View style={styles.container}>
            <View style={{marginLeft: theme.spacing * 2}}>
                <ProductItem item={item} status={handleIsSelected} setStatus={setStatus} />
                <FlatList 
                    data={variant}
                    scrollEnabled={false}
                    renderItem={({item})=><Variant item={item} isSelected={isSelected} handleSelect={handleSelect} category={category} model={name} brand={brand} />}
                />
            </View>
        </View>
    )
}

export default Model;