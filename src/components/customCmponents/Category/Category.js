import React from "react";
import { FlatList, View } from "react-native";
import { ProductItem } from "../../commonComponents";
import styles from "./styles";
import theme from "../../../theme";
import { Brand } from "../";

const Category = ({item, isSelected, handleSelect}) => {
    const { brands = [], name } = item

    const setStatus = () => {
        handleSelect(name, null, null, null, item)
    }

    const handleIsSelected = () => isSelected(name, null, null, null)

    return(
        <View style={styles.container}>
            <ProductItem item={item} status={handleIsSelected} setStatus={setStatus} />
            <FlatList 
                data={brands}
                scrollEnabled={false}
                renderItem={({item})=><Brand item={item} isSelected={isSelected} handleSelect={handleSelect} category={name} />}
            />
        </View>
    )
}

export default Category;