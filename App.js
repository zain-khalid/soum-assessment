import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { Category } from "./src/components/customCmponents"
import data from "./src/constants/dataMoke.json"
import theme from './src/theme';

const App = () => {

  const [selected, setSelected] = useState([]);

  const isSelected = (category, brand, model, variant) => {
    return selected.some(element => element.category == category && element.brand == brand && element.model == model && element.variant == variant)
  }

  const handleSelect = (category, brand, model, variant, item) => {

    let isEmpty = (index) => {
      return index || null
    }

    if(isSelected(category, brand, model, variant)){
      let filter = selected.filter(element => !(element.category == category && element.brand == brand && element.model == model && element.variant == variant))
      setSelected([...filter])
    } else {
      setSelected([
        ...selected,
        {
          category: isEmpty(category),
          brand: isEmpty(brand),
          model: isEmpty(model),
          variant: isEmpty(variant),
          item: item
        }
      ])
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.contentContainerStyle}>
        <FlatList
          data={data.category}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item})=><Category item={item} isSelected={isSelected} handleSelect={handleSelect} />}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: theme.spacing
  },
  contentContainerStyle: {
    flex: 1
  }
});

export default App;