import React from "react";
import { FlatList, View } from "react-native";
import { ProductItem } from "../../commonComponents";
import styles from "./styles";
import theme from "../../../theme";
import { Model } from "../";

const Brand = ({item, isSelected, handleSelect, category}) => {
    const { models = [], name } = item

    const setStatus = () => {
        handleSelect(category, name, null, null, item)
    }

    const handleIsSelected = () => isSelected(category, name, null, null)

    return(
        <View style={styles.container}>
            <View style={{marginLeft: theme.spacing * 2}}>
                <ProductItem item={item} status={handleIsSelected} setStatus={setStatus} />
                <FlatList 
                    data={models}
                    scrollEnabled={false}
                    renderItem={({item})=><Model item={item} isSelected={isSelected} handleSelect={handleSelect} category={category} brand={name} />}
                />
            </View>
        </View>
    )
}

export default Brand;